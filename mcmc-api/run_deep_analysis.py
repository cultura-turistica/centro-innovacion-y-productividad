import subprocess
print("Ejecutando Notebook 1...")
subprocess.run(["/Users/cultur/.gemini/antigravity/scratch/repo-github/.venv/bin/python", "-m", "jupyter", "nbconvert", "--to", "notebook", "--execute", "--inplace", "mcmc-api/FONTUR_01_Evolucion_Contratacion.ipynb"])
print("Ejecutando Notebook 2...")
subprocess.run(["/Users/cultur/.gemini/antigravity/scratch/repo-github/.venv/bin/python", "-m", "jupyter", "nbconvert", "--to", "notebook", "--execute", "--inplace", "mcmc-api/FONTUR_02_Riesgos_Incumplimientos.ipynb"])
print("¡Listo!")
