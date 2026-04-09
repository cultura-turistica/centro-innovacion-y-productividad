from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

app = FastAPI(title="Cultura T - MCMC DataLab API")

# Permitir que React (Vite) en localhost:5173 consuma esta API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # En producción se restringe a tu dominio Github Pages
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"mensaje": "Bienvenido a la API del DataLab de Cultura T. El cerebro MCMC está encendido."}

@app.get("/api/v1/territorios")
def get_territories_data():
    """
    Lee el CSV fusionado (Satélite + DANE) y lo envía a React.
    """
    try:
        # Cargamos el archivo que generamos en el paso 2
        df = pd.read_csv("datos_fusionados_dane_geeh.csv")
        # En caso de que haya NaN (como el Territorio Oculto), FastAPI prefiere None o strings
        df = df.fillna("Dato Inobservado") 
        return df.to_dict(orient="records")
    except FileNotFoundError:
        return {"error": "Aún no se ha generado el archivo de datos. Corre data_merger.py primero."}
