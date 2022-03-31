const maximos =[
    {
        origen: "Organolépticas y físicas",
        color: "#a1eaa1",
        nombre: "Olor",
        maxNOM201: "Inodoro",
        maxNOM127: "Agradable",
        unidades: ""
    },
    {
        origen: "Organolépticas y físicas",
        nombre: "Sabor",
        maxNOM201: "Insípido",
        maxNOM127: "Agradable",
        unidades: ""
    },
    {
        origen: "Organolépticas y físicas",
        nombre: "Color",
        maxNOM201: "15",
        maxNOM127: "20",
        unidades: "UCV"
    },
    {
        origen: "Organolépticas y físicas",
        nombre: "Turbiedad",
        maxNOM201: "5",
        maxNOM127: "5",
        unidades: "UTN"
    },
    {
        origen: "Microbiológicas",
        color: "#62dd62",
        nombre: "Coliformes totales",
        maxNOM201: "1.1",
        maxNOM127: "2",
        unidades: "NPM/100 mL"
    },
    {
        origen: "Microbiológicas",
        nombre: "Coliformes fecales",
        maxNOM201: "",
        maxNOM127: "0",
        unidades: "NPM/100 mL"
    },
    {
        origen: "Metales pesados o metaloides",
        color: "#f5d781",
        nombre: "Aluminio",
        maxNOM201: "",
        maxNOM127: "0.2",
        unidades: "mg/L"
    },
    {
        origen: "Metales pesados o metaloides",
        nombre: "Arsénico",
        maxNOM201: "0.025",
        maxNOM127: "0.05",
        unidades: "mg/L"
    },
    {
        origen: "Metales pesados o metaloides",
        nombre: "Bario",
        maxNOM201: "",
        maxNOM127: "0.7",
        unidades: "mg/L"
    },
    {
        origen: "Metales pesados o metaloides",
        nombre: "Boro",
        maxNOM201: "0.3",
        maxNOM127: "",
        unidades: "mg/L"
    },
    {
        origen: "Metales pesados o metaloides",
        nombre: "Cadmio",
        maxNOM201: "0.005",
        maxNOM127: "0.005",
        unidades: "mg/L"
    },
    {
        origen: "Metales pesados o metaloides",
        nombre: "Cobre",
        maxNOM201: "",
        maxNOM127: "2",
        unidades: "mg/L"
    },
    {
        origen: "Metales pesados o metaloides",
        nombre: "Cromo total",
        maxNOM201: "",
        maxNOM127: "0.05",
        unidades: "mg/L"
    },
    {
        origen: "Metales pesados o metaloides",
        nombre: "Fenoles",
        maxNOM201: "",
        maxNOM127: "0.001",
        unidades: "mg/L"
    },
    {
        origen: "Metales pesados o metaloides",
        nombre: "Fierro",
        maxNOM201: "",
        maxNOM127: "0.3",
        unidades: "mg/L"
    },
    {
        origen: "Metales pesados o metaloides",
        nombre: "Fluoruros",
        maxNOM201: "1.5",
        maxNOM127: "1.5",
        unidades: "mg/L"
    },
    {
        origen: "Metales pesados o metaloides",
        nombre: "Manganeo",
        maxNOM201: "",
        maxNOM127: "0.15",
        unidades: "mg/L"
    },
    {
        origen: "Metales pesados o metaloides",
        nombre: "Mercurio",
        maxNOM201: "",
        maxNOM127: "0.001",
        unidades: "mg/L"
    },
    {
        origen: "Metales pesados o metaloides",
        nombre: "Níquel",
        maxNOM201: "0.02",
        maxNOM127: "",
        unidades: "mg/L"
    },
    {
        origen: "Metales pesados o metaloides",
        nombre: "Nitrógeno amoniacal",
        maxNOM201: "",
        maxNOM127: "0.5",
        unidades: "mg/L"
    },
    {
        origen: "Metales pesados o metaloides",
        nombre: "Plaguicida (Aldrín/Dieldrín)",
        maxNOM201: "",
        maxNOM127: "0.03",
        unidades: "mg/L"
    },
    {
        origen: "Metales pesados o metaloides",
        nombre: "Plata",
        maxNOM201: "0.1",
        maxNOM127: "",
        unidades: "mg/L"
    },
    {
        origen: "Metales pesados o metaloides",
        nombre: "Plomo",
        maxNOM201: "0.01",
        maxNOM127: "0.025",
        unidades: "mg/L"
    },
    {
        origen: "Metales pesados o metaloides",
        nombre: "Selenio",
        maxNOM201: "0.01",
        maxNOM127: "",
        unidades: "mg/L"
    },
    {
        origen: "Metales pesados o metaloides",
        nombre: "Sodio",
        maxNOM201: "",
        maxNOM127: "200",
        unidades: "mg/L"
    },
    {
        origen: "Metales pesados o metaloides",
        nombre: "Trihalometanos totales",
        maxNOM201: "",
        maxNOM127: "0.2",
        unidades: "mg/L"
    },
    {
        origen: "Metales pesados o metaloides",
        nombre: "Zinc",
        maxNOM201: "",
        maxNOM127: "5",
        unidades: "mg/L"
    },
    {
        origen: "Otros contaminantes",
        color: "#f79e95",
        nombre: "Cianuros",
        maxNOM201: "0.05",
        maxNOM127: "0.07",
        unidades: "mg/L"
    },
    {
        origen: "Otros contaminantes",
        nombre: "Nitratos",
        maxNOM201: "10",
        maxNOM127: "10",
        unidades: "mg/L"
    },
    {
        origen: "Otros contaminantes",
        nombre: "Nitritlos",
        maxNOM201: "0.05",
        maxNOM127: "0.05",
        unidades: "mg/L"
    },
    {
        origen: "Otros contaminantes",
        nombre: "Azul de metilo",
        maxNOM201: "0.5",
        maxNOM127: "0.5",
        unidades: "mg/L"
    },
    {
        origen: "Otros contaminantes",
        nombre: "DDT",
        maxNOM201: "",
        maxNOM127: "1",
        unidades: "mg/L"
    },
    {
        origen: "Otros contaminantes",
        nombre: "Sulfatos",
        maxNOM201: "",
        maxNOM127: "400",
        unidades: "mg/L"
    },
    {
        origen: "Desinfectantes",
        color: "#f2f795",
        nombre: "Cloro residual",
        maxNOM201: "0.1",
        maxNOM127: "0.2 - 1.5",
        unidades: "mg/L"
    },
    {
        origen: "Subproductos de desinfección",
        color: "#95c9f7",
        nombre: "Cloro formaldehido",
        maxNOM201: "0.9",
        maxNOM127: "",
        unidades: "mg/L"
    },
    {
        origen: "Subproductos de desinfección",
        nombre: "Cloro Trialometanos totales",
        maxNOM201: "0.1",
        maxNOM127: "",
        unidades: "mg/L"
    },
    {
        origen: "Subproductos de desinfección",
        nombre: "Cloruros",
        maxNOM201: "",
        maxNOM127: "250",
        unidades: "mg/L"
    },
    {
        origen: "Subproductos de desinfección",
        nombre: "Ozono formaldehido",
        maxNOM201: "0.9",
        maxNOM127: "",
        unidades: "mg/L"
    },
    {
        origen: "Subproductos de desinfección",
        nombre: "Hexaclorobenceno",
        maxNOM201: "",
        maxNOM127: "0.01",
        unidades: "mg/L"
    },
    {
        origen: "Subproductos de desinfección",
        nombre: "Heptacloro y epóxido de heptacloro",
        maxNOM201: "",
        maxNOM127: "0.03",
        unidades: "mg/L"
    },
    {
        origen: "Subproductos de desinfección",
        nombre: "Metoxicloro",
        maxNOM201: "",
        maxNOM127: "20",
        unidades: "mg/L"
    },
    {
        origen: "Subproductos de desinfección",
        nombre: "2,4 - D",
        maxNOM201: "",
        maxNOM127: "50",
        unidades: "mg/L"
    },
    {
        origen: "Aditivos",
        color: "#b995f7",
        nombre: "Anhídrido carbónico BPF",
        maxNOM201: "",
        maxNOM127: "",
        unidades: "mg/L"
    },
    {
        origen: "Aditivos",
        nombre: "Clordano",
        maxNOM201: "",
        maxNOM127: "0.3",
        unidades: "mg/L"
    },
    {
        origen: "Aditivos",
        nombre: "DDT",
        maxNOM201: "",
        maxNOM127: "1",
        unidades: "mg/L"
    },
    {
        origen: "Aditivos",
        nombre: "Gamma-HCH",
        maxNOM201: "",
        maxNOM127: "2",
        unidades: "mg/L"
    },
    {
        origen: "Aditivos",
        nombre: "Dureza (CaCO3)",
        maxNOM201: "",
        maxNOM127: "500",
        unidades: "mg/L"
    },
    {
        origen: "Aditivos",
        nombre: "Potencial de hidrógeno pH",
        maxNOM201: "",
        maxNOM127: "6.5 - 8.5",
        unidades: "mg/L"
    },
    {
        origen: "Aditivos",
        nombre: "Sólidos disueltos totales",
        maxNOM201: "",
        maxNOM127: "1000",
        unidades: "mg/L"
    }
];