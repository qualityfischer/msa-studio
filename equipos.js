/* ============================================================================
   FISCHER MSA STUDIO - PLAN DE MUESTREO POR EQUIPO
   Los planes (piezas, ensayos, operadores y límites de cada equipo) viven en el archivo equipos.csv, que se prepara en Excel
   con la plantilla Plantilla_equipos.xlsx y se sube al sitio igual que los demás archivos.
   Si equipos.csv no tiene equipos, esta función permanece inactiva y el programa se comporta como siempre.

   modo: 'asistido'  -> un equipo que no está en la lista puede capturarse a mano; el reporte indica "Sin plan de muestreo definido".
         'estricto'  -> un equipo que no está en la lista NO puede iniciar estudio (hay que darlo de alta en equipos.csv).
   revision: texto que se imprime en cada reporte para identificar la versión de la lista (por ejemplo la fecha: '2026-11-15').
   ============================================================================ */
/* claveHash: contraseña para modificar las piezas u operadores de un equipo que tiene plan. Solo se guarda su huella (SHA-256 de "msa-plan|CONTRASEÑA"), no la contraseña.
   Es una barrera sencilla, no un candado de seguridad: cualquiera que lea este archivo puede intentar adivinarla. Si se borra la huella, la modificación queda deshabilitada. */
const PLAN_EQUIPOS = { modo: 'asistido', revision: 'Asignación R&R 2026', archivo: 'equipos.csv', claveHash: '447189c3a081778fa15246a5d97bbbcb1f98809bc6be8b1d7162c69c6e118b12' };
