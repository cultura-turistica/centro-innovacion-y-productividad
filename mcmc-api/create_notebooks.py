import nbformat as nbf
import os

# Create Notebook 1: Evolución de la Contratación
nb1 = nbf.v4.new_notebook()

text1 = """# Análisis FONTUR: La Dinámica del Gasto Público en Turismo (2021-2024)
Este cuaderno tiene como objetivo explorar la carpeta `../data` para procesar los archivos Excel de FONTUR. 
Analizaremos estadísticamente la distribución de los presupuestos y las modalidades de contratación a lo largo de los años para alimentar una plataforma de scrollytelling (estética *The Pudding*).

**Ejecuta las siguientes celdas paso a paso para validar los datos.**"""

code1 = """import pandas as pd
import json
import os

# Configuración de rutas
DATA_DIR = '../data'
OUTPUT_DIR = '../src/data'

# Crear carpeta de salida si no existe
os.makedirs(OUTPUT_DIR, exist_ok=True)
print(f"Buscando archivos en {DATA_DIR}...")
files = [f for f in os.listdir(DATA_DIR) if f.endswith('.xlsx')]
print("Archivos encontrados:", files)"""

code2 = """# Cargar el consolidado de Recursos Contratados
file_recursos = [f for f in files if '453995' in f or 'RecursosContratados' in f][0]
file_path = os.path.join(DATA_DIR, file_recursos)
print("Analizando:", file_path)

xls = pd.ExcelFile(file_path)
print("Hojas disponibles:", xls.sheet_names)"""

code3 = """# Extraer y limpiar Modalidad_Contratación
# Buscamos la fila correcta de cabeceras
df_modalidad = pd.read_excel(file_path, sheet_name='Modalidad_Contratación', header=1)

# Limpieza básica
df_modalidad = df_modalidad.dropna(how='all')
df_modalidad.columns = [str(col).replace('\\n', ' ').strip() for col in df_modalidad.columns]
display(df_modalidad.head())"""

code4 = """# Análisis Estadístico: Evolución Anual
columnas_valores = [c for c in df_modalidad.columns if 'Valor' in c]
columnas_contratos = [c for c in df_modalidad.columns if 'N°' in c or 'Contratos' in c and 'Valor' not in c]

# Sumatorias
totales = df_modalidad[columnas_valores].sum()
print("Totales de inversión reportados (validación estadística):")
print(totales)"""

code5 = """# Exportar la memoria estadística para The Pudding format
# Preparamos un JSON listo para ser consumido en React.
export_data = df_modalidad.fillna(0).to_dict(orient='records')
with open(os.path.join(OUTPUT_DIR, 'fontur_modalidad.json'), 'w') as f:
    json.dump(export_data, f, indent=4)
print("✅ Datos exportados exitosamente a src/data/fontur_modalidad.json")"""

nb1['cells'] = [
    nbf.v4.new_markdown_cell(text1),
    nbf.v4.new_code_cell(code1),
    nbf.v4.new_code_cell(code2),
    nbf.v4.new_code_cell(code3),
    nbf.v4.new_code_cell(code4),
    nbf.v4.new_code_cell(code5)
]


# Create Notebook 2: Riesgos e Incumplimientos
nb2 = nbf.v4.new_notebook()

text2 = """# Análisis FONTUR: Geografía del Riesgo y Daño Patrimonial (Incumplimientos)
El segundo pilar de nuestro scrollytelling aborda los contratos que tuvieron problemas.
Analizaremos la magnitud de los incumplimientos como porcentaje de los valores totales."""

code2_1 = """import pandas as pd
import json
import os

DATA_DIR = '../data'
OUTPUT_DIR = '../src/data'

file_recursos = [f for f in os.listdir(DATA_DIR) if f.endswith('.xlsx') and '453995' in f or 'RecursosContratados' in f][0]
file_path = os.path.join(DATA_DIR, file_recursos)

xls = pd.ExcelFile(file_path)
print("Hojas:", xls.sheet_names)"""

code2_2 = """# Extraer tabla de incumplimientos
df_riesgo = pd.read_excel(file_path, sheet_name='Incumplimientos', header=1)
display(df_riesgo.head())"""

code2_3 = """# Análisis Estadístico y Extracción de Entidades
# Evaluamos cuántas entidades tienen fallos, frecuencias y montos expuestos.
nombres_contratistas = df_riesgo.iloc[:, 2].value_counts()
print("Top Contratistas con repetidos incumplimientos:")
print(nombres_contratistas.head(5))"""

code2_4 = """# Exportar hallazgos de Riesgo para la capa Visual
export_risk = df_riesgo.fillna('').to_dict(orient='records')
with open(os.path.join(OUTPUT_DIR, 'fontur_riesgos.json'), 'w') as f:
    json.dump(export_risk, f, indent=4)
print("✅ Datos de Riesgos exportados exitosamente a src/data/fontur_riesgos.json")"""

nb2['cells'] = [
    nbf.v4.new_markdown_cell(text2),
    nbf.v4.new_code_cell(code2_1),
    nbf.v4.new_code_cell(code2_2),
    nbf.v4.new_code_cell(code2_3),
    nbf.v4.new_code_cell(code2_4)
]

with open('FONTUR_01_Evolucion_Contratacion.ipynb', 'w') as f:
    nbf.write(nb1, f)
    
with open('FONTUR_02_Riesgos_Incumplimientos.ipynb', 'w') as f:
    nbf.write(nb2, f)

print("Notebooks creados con éxito.")
