import { columnInterface } from "../../../interfaces";

const DEFAULT_COLUMN_WIDTH = 100;

export const mukColumnData: columnInterface[] = [
    {
        Header: "ARKOD ID",
        accessor: "id",
        className: "sticky",
        headerClassName: "sticky",
        width: DEFAULT_COLUMN_WIDTH,
    },
    {
        Header: "ID PARCELE",
        accessor: "parcelId",
        className: "sticky",
        headerClassName: "sticky",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "KULTURA",
        accessor: "crop",
        className: "sticky",
        headerClassName: "sticky",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "PRIJAV. POVRŠINA",
        accessor: "surfaceApplied",
        className: "sticky",
        headerClassName: "sticky",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "SMANJENJE",
        accessor: "reduction",
        className: "sticky",
        headerClassName: "sticky",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "SMANJENJE (RETRO)",
        accessor: "reducationRetro",
        className: "sticky",
        headerClassName: "sticky",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "UTVRĐENA POVRŠINA",
        accessor: "surfaceSeen",
        className: "sticky",
        headerClassName: "sticky",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "UTVRĐENA POVRŠINA (RETRO)",
        accessor: "retroSurfaceSeen",
        className: "sticky",
        headerClassName: "sticky",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "PROSTORNI PREKLOP",
        accessor: "surfaceOverlap",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "PROSTORNI PREKLOP (RETRO)",
        accessor: "retroSurfaceOverlap",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "EXPERTNA PROCJENA",
        accessor: "expEst",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "INSPEKCIJA",
        accessor: "inspection",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "VIŠA SILA",
        accessor: "visaSila",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "ADMIN. ODLUKA",
        accessor: "adminOdluka",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "ADMIN. ODLUKA (RETRO)",
        accessor: "adminDecisionRetro",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "KONTROLA NA TERENU",
        accessor: "control",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "OKT",
        accessor: "okt",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "PP MINE",
        accessor: "ppMines",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "PP ARKOD",
        accessor: "ppArkod",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "PP KNT",
        accessor: "ppKnt",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "PP RFV",
        accessor: "ppRfv",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "PP NPP",
        accessor: "ppNpp",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "PP RETRO",
        accessor: "ppRetro",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "PP TOLERANCA",
        accessor: "ppToleration",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "PP TOLERANCA (RETRO)",
        accessor: "ppTolerationRetro",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "EJ SENTINEL",
        accessor: "ejSentinel",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "EJ SATELIT",
        accessor: "ejSatelite",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "DOKUMENTACIJA",
        accessor: "ejDocumentation",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "EJ GTF",
        accessor: "ejGTF",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "EJ TP",
        accessor: "ejTP",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "MONITORING",
        accessor: "monitoring",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "EXPERTNA PROVJERA",
        accessor: "expert",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "INSPEKCIJSKO RJEŠENJE",
        accessor: "inspection",
        width: DEFAULT_COLUMN_WIDTH 
    },
    {
        Header: "KNT STATUS",
        accessor: "kntStatus",
        width: DEFAULT_COLUMN_WIDTH 
    }
];