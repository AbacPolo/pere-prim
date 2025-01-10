import React from "react";
import "./DataCard.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { PortableText } from "@portabletext/react";
import components from "../../portableTextComponents";

function DataCard({ data }) {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    const [month, year] = formattedDate.split(' ');

    return `${month.slice(0, 3)}. ${year}`;
  };

  function CalcularDiferenciaFechas(fechaInicio, fechaFinal) {
    // Asegúrate de que las fechas sean instancias de Date
    const inicio = new Date(fechaInicio);
    const final = fechaFinal ? new Date(fechaFinal) : new Date();

    // Obtener los años y meses de cada fecha
    const anioInicio = inicio.getFullYear();
    const mesInicio = inicio.getMonth();
    const anioFinal = final.getFullYear();
    const mesFinal = final.getMonth();

    // Calcular la diferencia de años y meses
    let totalAnios = anioFinal - anioInicio;
    let totalMeses = mesFinal - mesInicio;

    // Ajustar si los meses de la fecha final son menores que los de la fecha inicial
    if (totalMeses < 0) {
        totalAnios--;
        totalMeses += 12;
    }

     var finalString = "(";
     if (totalAnios > 0) { finalString += totalAnios + " year" + (totalAnios > 1 ? "s " : " "); }
     finalString += totalMeses + " month" + (totalMeses > 1 ? "s)" : ")");

     return finalString;
  }

  return (
    <Card className="DataCard_Container">
      <CardContent className="DataCard_Wrapper">
        <div className="DataCard_Header">
          <CardMedia
            className="DataCard_Logo"
            component="img"
            src={data.logo.asset.url}
            alt={data.name}
          />
          <div className="DataCard_HeaderText">
            <Typography
              variant="h4"
              sx={{ marginLeft: "0px", letterSpacing: "0px" }}>
              {data.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "#A3B1BE" }}>
              {data.subtitle}
            </Typography>
            <Typography variant="body1" sx={{ color: "#A3B1BE" }}>
              {data.location}
            </Typography>
             <Typography variant="body1" sx={{ color: "#A3B1BE" }}>
               {formatDate(data.startDate)} - {data.currentlyHere ? "Currently" : formatDate(data.endDate)} {CalcularDiferenciaFechas(data.startDate, data.currentlyHere ? null : data.endDate) }
             </Typography>
          </div>
        </div>

        <PortableText value={data.contentText} components={components} />
      </CardContent>
    </Card>
  );
}

export default DataCard;
