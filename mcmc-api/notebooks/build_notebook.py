import json

notebook = {
 "cells": [
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "# Analítica Backend: Emisiones Históricas de CO2 (OWID)\n",
    "\n",
    "Este documento contiene la demostración científica real de donde parte la historia narrativa y el caché consumido por el frontend en tiempo real."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 1,
   "metadata": {},
   "outputs": [],
   "source": [
    "import pandas as pd\n",
    "import numpy as np\n",
    "import matplotlib.pyplot as plt\n",
    "import seaborn as sns\n",
    "\n",
    "sns.set_style('whitegrid')\n",
    "# Descargar los 14MB de la fuente original Our World in Data (OWID)\n",
    "url = 'https://raw.githubusercontent.com/owid/co2-data/master/owid-co2-data.csv'\n",
    "df = pd.read_csv(url)\n",
    "df = df.fillna(0)\n",
    "df['gdp_per_capita'] = np.where(df['population'] != 0, df['gdp'] / df['population'], 0)\n",
    "df.head()"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### 1. Extrayendo los continentes y su evolución"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 2,
   "metadata": {},
   "outputs": [],
   "source": [
    "continents = ['World', 'Asia', 'Oceania', 'Europe', 'Africa', 'North America', 'South America']\n",
    "df_continents = df[df.country.isin(continents)]\n",
    "\n",
    "# Mostrar el CO2 de Norteamérica vs Mundo en 1950\n",
    "df_1950 = df_continents[df_continents.year == 1950]\n",
    "df_1950[['country', 'co2']]"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### 2. Dispersión del año 2020 (PIB vs Emisiones)\n",
    "Aquí pre-analizamos la dispersión para entender cómo cruzar en la FastAPI."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 3,
   "metadata": {},
   "outputs": [],
   "source": [
    "df_scatter = df[(df.year == 2024) & (~df.country.isin(continents))]\n",
    "df_scatter = df_scatter[(df_scatter['gdp_per_capita'] > 0) & (df_scatter['co2'] > 0)]\n",
    "plt.figure(figsize=(10,6))\n",
    "plt.xscale('log')\n",
    "plt.yscale('log')\n",
    "sns.scatterplot(data=df_scatter, x='gdp_per_capita', y='co2')\n",
    "plt.title('Dispersión de Países (2024): PIB vs CO2')"
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "name": "python",
   "version": "3.11"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 4
}

with open('04_co2_analysis_owid.ipynb', 'w') as f:
    json.dump(notebook, f, indent=1)
