import pandas as pd
import numpy as np
import os
from pathlib import Path

# Configuraciones
CO2_URL = "https://raw.githubusercontent.com/owid/co2-data/master/owid-co2-data.csv"
OUTPUT_PARQUET = Path(__file__).parent / "co2_master.parquet"

def run_etl():
    print("⏳ Iniciando Extracción desde Our World In Data...")
    raw_df = pd.read_csv(CO2_URL)
    print(f"✅ Descarga completada. Dimensiones crudas: {raw_df.shape}")

    print("⏳ Ejecutando Transformación (Filtrado Estricto ISO)...")
    
    # 1. Columnas Sagradas (Optimizamos memoria quitando ruido innecesario)
    cols = ['country', 'iso_code', 'year', 'population', 'gdp', 'co2', 'co2_per_capita', 'coal_co2', 'oil_co2', 'gas_co2', 'methane', 'total_ghg']
    # Manejar columnas que pudieran no existir en versiones antiguas
    valid_cols = [c for c in cols if c in raw_df.columns]
    df = raw_df[valid_cols].copy()

    # 2. Purgado de Bloques Económicos y Continentes
    df_countries = df[df['iso_code'].notna() & ~df['iso_code'].str.startswith('OWID', na=False)].copy()

    # 3. Riqueza Per Cápita e Integridad de Tipos
    # Llenamos las operaciones numéricas sin inventar 0s en los features puramente climáticos nulos de la antigüedad
    df_countries['gdp_per_capita'] = np.where((df_countries['population'].notna()) & (df_countries['population'] > 0), df_countries['gdp'] / df_countries['population'], np.nan)
    
    # Garantizar que el tipo de datos string se mantenga para Arrow/Parquet en las variables categóricas
    df_countries['country'] = df_countries['country'].astype(str)
    df_countries['iso_code'] = df_countries['iso_code'].astype(str)
    
    print(f"✅ Transformación cerrada. Naciones Auditadas: {df_countries['country'].nunique()}")

    print("⏳ Ejecutando Carga (Empaquetado en Parquet)...")
    # Compresión usando pyarrow que es el estándar de oro en pandas
    df_countries.to_parquet(OUTPUT_PARQUET, engine='pyarrow', compression='snappy')
    # Guardamos también los continentes solo para referencias topológicas en el futuro si la API los pide
    df_continents = raw_df[raw_df['country'].isin(['World', 'Asia', 'Oceania', 'Europe', 'Africa', 'North America', 'South America'])].copy()
    df_continents.to_parquet(Path(__file__).parent / "co2_continents.parquet", engine='pyarrow', compression='snappy')
    
    size_mb = os.path.getsize(OUTPUT_PARQUET) / (1024 * 1024)
    print(f"🚀 ETL Terminado. Archivo comprimido pesado de 14MB a -> {size_mb:.2f} MB. Listo para el Backend.")

if __name__ == "__main__":
    run_etl()
