import ee
import pandas as pd

# Iniciar GEE con tu proyecto verificado
ee.Initialize(project='verdant-art-489603-q9')

def get_municipality_night_lights(mun_name, coordinates):
    """
    Se comunica con las nubes de Google para extraer la luz media de un punto.
    """
    point = ee.Geometry.Point(coordinates)
    dataset = ee.ImageCollection("NOAA/DMSP-OLS/NIGHTTIME_LIGHTS").filterDate('2013-01-01', '2013-12-31').first()
    
    # Extraer el valor 'stable_lights' (Rango 0 a 63 de intensidad lumínica)
    light_value = dataset.reduceRegion(
        reducer=ee.Reducer.mean(),
        geometry=point,
        scale=1000
    ).getInfo()
    
    return light_value.get('stable_lights', 0)

def generate_training_data():
    print("🛰️ Iniciando barrido satelital sobre municipios modelo (Quindío/Turismo)...")
    
    # Coordenadas [Longitud, Latitud]. 
    # Usamos municipios reales y simulamos las encuestas del DANE (con un municipio "en blanco").
    territorios = [
        {"nombre": "Salento (Alto Turismo)", "coord": [-75.57, 4.63], "pobreza_dane": 18.5},
        {"nombre": "Filandia (Medio Turismo)", "coord": [-75.67, 4.67], "pobreza_dane": 22.1},
        {"nombre": "Pijao (Bajo Turismo)", "coord": [-75.75, 4.33], "pobreza_dane": 32.2},
        {"nombre": "Territorio Oculto Indeterminado", "coord": [-75.80, 4.40], "pobreza_dane": None} # <-- Aquí actuará la magia Bayesiana
    ]
    
    datos = []
    for t in territorios:
        luz = get_municipality_night_lights(t['nombre'], t['coord'])
        datos.append({
            "municipio": t["nombre"],
            "intensidad_luz_satelite": luz,
            "incidencia_pobreza_base": t["pobreza_dane"] # Esto es lo que el DANE "encuestó"
        })
        print(f"✔️ {t['nombre']} analizado -> Luz: {luz:.2f} | DANE Pobreza: {t['pobreza_dane']}%")
    
    df = pd.DataFrame(datos)
    
    # Guardamos nuestro dataset cruzado listo para el modelo bayesiano
    df.to_csv("datos_fusionados_dane_geeh.csv", index=False)
    print("\n💾 Archivo 'datos_fusionados_dane_geeh.csv' guardado.")
    print("¡Fusión Satélite+DANE terminada! El terreno está listo para el Modelo Bayesiano.")

if __name__ == "__main__":
    generate_training_data()
