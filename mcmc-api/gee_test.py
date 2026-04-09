import ee

# La logica: Inicializar la API de Earth Engine atando el uso a un Google Cloud Project.
# Como tienes la capa gratuita, Google nos exige amarrar las solicitudes a un Proyecto específico.
try:
    # AQUÍ DEBE IR TU PROJECT ID EXTACTO DE GOOGLE CLOUD
    # Ejemplo: ee.Initialize(project='culturat-turismo-123')
    ee.Initialize(project='verdant-art-489603-q9')
    print("✅ Autenticación exitosa al Proyecto. Conectado a Google Earth Engine.")
    
    # Vamos a pedir nuestro primer dato de prueba: 
    # El satélite DMSP-OLS Nighttime Lights Time Series
    dataset = ee.ImageCollection("NOAA/DMSP-OLS/NIGHTTIME_LIGHTS")
    
    # Filtrar imágenes del año 2013 (último año disponible de esta colección)
    # y sacar una imagen de ejemplo.
    night_lights = dataset.filterDate('2013-01-01', '2013-12-31').first()
    
    # Imprimir qué bandas (capas de información) tiene 
    print("📡 Información del satélite recuperada:")
    print("Bandas disponibles en el mapa de luces nocturnas:")
    print(night_lights.bandNames().getInfo())
    
    print("\nTodo está listo para extraer datos para nuestro modelo en Colombia 🇨🇴.")

except Exception as e:
    print("❌ Error al acceder a Earth Engine. ¿Seguro que corriste 'earthengine authenticate'?")
    print("Detalle del error:", e)
