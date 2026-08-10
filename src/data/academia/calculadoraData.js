export const CALCULADORA_DATA = {
  initialState: {
    fixedCosts: [
      { id: 1, label: 'Alquiler de salón comunal', qty: 1, value: 150000 },
      { id: 2, label: 'Permiso de ingreso a reserva', qty: 1, value: 50000 },
    ],
    variableCosts: [
      { id: 1, label: 'Kit de Materiales', qty: 1, value: 50000 },
      { id: 2, label: 'Refrigerio', qty: 1, value: 15000 },
      { id: 3, label: 'Seguro turista', qty: 1, value: 4000 }
    ],
    flexibleCosts: [
      { id: 1, label: 'Lancha (6 pax)', limit: 6, reserved: 10, value: 300000 }
    ],
    percentages: {
      contingency: 3,
      admin: 3,
      operational: 2,
      commission: 20,
      netProfit: 20,
      iva: 19
    }
  },
  modals: {
    info: {
      title: "📚 Guía de Uso",
      sections: [
        {
          title: "1. Ingresa los Costos en COP",
          items: [
            { text: "Todos los costos se ingresan en Pesos Colombianos (COP)" },
            { strong: "Costos Fijos:", text: "Gastos que no cambian con el número de participantes (alquiler de espacios, permisos, seguros de evento)" },
            { strong: "Costos Variables:", text: "Gastos por persona (alimentación, materiales, seguros)" },
            { strong: "Costos Flexibles:", text: "Servicios con capacidad limitada (lanchas, vehículos). La calculadora determina automáticamente cuántas unidades necesitas." }
          ]
        },
        {
          title: "2. Configura Porcentajes",
          items: [
            { text: "Imprevistos: 3-5% recomendado" },
            { text: "Administrativos: 3% típico" },
            { text: "Operacionales: 2% típico" },
            { text: "Comisión: 5-30% según intermediario" },
            { text: "Utilidad: 15-25% recomendado (se calcula como margen del precio de venta)" }
          ]
        },
        {
          title: "3. Modos y Resultados",
          items: [
            { text: "Usa el slider de PAX para ver cómo cambia el costo por persona a mayor escala." },
            { text: "Usa el botón USD para cotizar a extranjeros basado en tu TRM ingresada." }
          ]
        }
      ]
    },
    costTypes: {
      title: "💡 Tipos de Costos",
      sections: [
        {
          icon: "🏛️",
          title: "Costos Fijos",
          description: "No cambian con el número de participantes dentro de un rango establecido. El costo total es constante, pero el costo por persona disminuye a medida que aumenta el grupo.",
          example: "Alquiler de salón comunal por $150,000 COP para el evento"
        },
        {
          icon: "🔄",
          title: "Costos Variables",
          description: "Cambian proporcionalmente con cada participante adicional. El costo por persona se mantiene constante, pero el costo total del grupo aumenta linealmente.",
          example: "Kit de materiales por $50,000 COP por persona"
        },
        {
          icon: "⚖️",
          title: "Costos Flexibles",
          description: "Servicios con capacidad limitada. La calculadora determina automáticamente cuántas unidades necesitas según los participantes reservados.",
          example: "Lancha con 6 puestos. Si reservas 8 personas, necesitas 2 lanchas (8 ÷ 6 = 1.33 → 2 unidades)"
        }
      ],
      formulaFooter: "PRECIO = COSTOS + GASTOS + UTILIDAD + COMISIÓN + IVA"
    },
    pricing: {
      title: "❓ ¿Cómo se Calcula el Precio Final?",
      sequence: {
        title: "✅ Secuencia de Cálculo",
        steps: [
          { strong: "Costos Directos", text: " = Fijos + Variables + Flexibles" },
          { strong: "Gastos Indirectos", text: " = Costos × (%Imprevistos + %Admin + %Operacional)" },
          { strong: "Precio Neto", text: " = Costos Directos + Gastos Indirectos" },
          { strong: "Precio con Utilidad", text: " = Precio Neto / (1 - %Utilidad)" },
          { strong: "Tarifa RACK", text: " = Precio con Utilidad + Comisión" },
          { strong: "Precio Final", text: " = Tarifa RACK + IVA" }
        ]
      },
      types: [
        {
          title: "📋 Precio NETO",
          subtitle: "Costos + Gastos Indirectos",
          description: "Base antes de utilidad. Incluye imprevistos, administrativos y operacionales."
        },
        {
          title: "🏷️ Tarifa RACK",
          subtitle: "Precio con Utilidad + Comisión",
          description: "Precio oficial con comisión para agencias y tour operadores."
        },
        {
          title: "💵 Precio FINAL",
          subtitle: "Tarifa RACK + IVA",
          description: "Precio que paga el cliente final con impuestos."
        }
      ]
    }
  },
  uiLabels: {
    headerTitle: "Calculadora Financiera",
    headerSubtitle: "Costeo de Paquetes Turísticos",
    guideButton: "Guía de Uso",
    typesButton: "Tipos de Costos",
    currencyNotice: "💱 Todos los valores en el formulario son en COP",
    exchangeLabel: "Tasa USD para conversión:",
    usdLockTitle: "Modo Dólares (USD) Activo",
    usdLockMsg: "El modo de edición está temporalmente bloqueado para evitar que ingreses valores en USD pensando que son COP. Desactiva la vista USD para volver a editar.",
    fixedCostsTitle: "Costos Fijos",
    fixedCostsSub: "Total constante sin importar el número de pasajeros",
    fixedInfoTitle: "¿Qué son costos fijos?",
    fixedInfoMsg: "El alquiler del salón comunal cuesta lo mismo si llevas 5 o 15 pasajeros. Ingresa su valor total. A más viajeros, este costo se reparte y tu paquete sale más económico.",
    variableCostsTitle: "Costos Variables",
    variableCostsSub: "El valor que pagas EXCLUSIVAMENTE POR CADA pasajero",
    variableInfoTitle: "¿Qué son costos variables?",
    variableInfoMsg: "Almuerzos, Seguros de Asistencia, Ingresos. Este costo es INDIVIDUAL. Si el grupo crece, gastas más, pero el costo por persona de esto nunca cambia.",
    flexibleCostsTitle: "Costos Flexibles",
    flexibleCostsSub: "Transportes u otros servicios con capacidad límite de puestos",
    flexibleInfoTitle: "Magia Automática",
    flexibleInfoMsg: "Si la lancha tiene capacidad para 6, y tú deslizas abajo a 8 turistas... la calculadora sola te costeará 2 lanchas."
  }
};
