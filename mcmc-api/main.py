from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import numpy as np
from pathlib import Path

app = FastAPI(title="Cultura T - MCMC DataLab API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Memoria Caché Ligerísima (.parquet local)
API_DIR = Path(__file__).parent
PARQUET_PATH = API_DIR / "co2_master.parquet"
CONTINENTS_PATH = API_DIR / "co2_continents.parquet"

CACHE = {}

def get_data():
    if 'countries' not in CACHE:
        CACHE['countries'] = pd.read_parquet(PARQUET_PATH)
        CACHE['continents'] = pd.read_parquet(CONTINENTS_PATH)
    return CACHE['countries'], CACHE['continents']

@app.get("/")
def read_root():
    return {"mensaje": "Backend Encendido. Caché Parquet ultraligera operando."}

@app.get("/api/v1/co2-data")
def get_co2_data(year: int = 2025, query_type: str = "line", country_name: str = "Colombia"):
    df_countries, df_continents = get_data()
    
    if query_type == "macro_continents":
        # Gráfica 1: Evolución pura de Continentes Occidentales vs Resto
        filtered = df_continents[(df_continents.year <= year) & (df_continents.year >= 1900)]
        agg = filtered.groupby(['year', 'country'])['co2'].mean().unstack(fill_value=0).reset_index()
        # Aseguramos devolver una estructura clara
        return agg.to_dict(orient="records")
        
    elif query_type == "cross_2006":
        # Gráfica 2: El Relevo OMC (China vs USA desde 1990)
        filtered = df_countries[
            (df_countries.year >= 1990) & 
            (df_countries.year <= year) & 
            (df_countries.country.isin(['United States', 'China']))
        ]
        agg = filtered.groupby(['year', 'country'])['co2'].mean().unstack(fill_value=0).reset_index()
        return agg.to_dict(orient="records")
        
    elif query_type == "scatter":
        # Gráfica 3: Dispersión Contemporánea (GDP vs CO2 per Cápita con Population Size)
        # Usamos el año solicitado para el gráfico
        filtered = df_countries[(df_countries.year == year) & (df_countries.gdp_per_capita > 0) & (df_countries.co2_per_capita > 0)]
        # Importante: solo enviamos los datos necesarios para evitar json inmensos
        agg = filtered[['country', 'year', 'gdp_per_capita', 'co2_per_capita', 'population']].copy()
        
        # Filtramos micronaciones muy pequeñas para que la visualización Scatter tenga sentido
        agg = agg[agg['population'] > 1_000_000]
        return agg.to_dict(orient="records")
        
    elif query_type == "country":
        # Devuelve historia completa para el Sandbox Interactivo
        # Verificamos si pidió "World" (que vive en la memoria de continentes) o si pidió un país soberano
        if country_name.lower() == "world":
            filtered = df_continents[df_continents.country.str.lower() == "world"].copy()
        else:
            filtered = df_countries[df_countries.country.str.lower() == country_name.lower()].copy()
            
        # Nos aseguramos de purgar NaNs feos para recharts enviándolos como None o 0 según aplique, 
        # pero es mejor solo enviar los años que existan después de 1900 para gráficas estables
        filtered = filtered[filtered.year >= 1900]
        # Reemplazar NaN con 0 para evitar fallos de render en la gráfica del usuario libre
        filtered = filtered.fillna(0)
        
        return filtered[['year', 'co2', 'methane', 'gdp', 'population']].to_dict(orient="records")
        
    elif query_type == "countries_list":
        # Listado instantáneo para el menú Select del Sandbox
        valid_countries = df_countries['country'].unique().tolist()
        valid_countries.sort()
        # Insertamos al Mundo como opción #1
        valid_countries.insert(0, "World")
        return valid_countries
        
    return {"error": "query_type desconocido"}
