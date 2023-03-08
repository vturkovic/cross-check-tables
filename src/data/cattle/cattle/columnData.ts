import { columnInterface } from "../../../interfaces";

const DEFAULT_COLUMN_WIDTH = 140;

export const cattleColumnData: columnInterface[] = [
    {
        Header: "R/B",
        accessor: "rb",
        width: DEFAULT_COLUMN_WIDTH
    },
    {
        Header: "JMBG",
        accessor: "jmbg",
        width: DEFAULT_COLUMN_WIDTH
    },
    {
        Header: "ID GRLA",
        accessor: "idGrla",
        width: DEFAULT_COLUMN_WIDTH
    },
    {
        Header: "VRSTA",
        accessor: "vrsta",
        width: DEFAULT_COLUMN_WIDTH
    },
    {
        Header: "PASMINA",
        accessor: "pasmina",
        width: DEFAULT_COLUMN_WIDTH
    },
    {
        Header: "DATUM ROĐENJA",
        accessor: "datumRodenja",
        width: DEFAULT_COLUMN_WIDTH
    },
    {
        Header: "DATUM IZLUČENJA",
        accessor: "datumIzlucenja",
        width: DEFAULT_COLUMN_WIDTH
    },
    {
        Header: "KONTROLA MLIJEČNOSTI",
        accessor: "kontrolaMlijecnosti",
        width: DEFAULT_COLUMN_WIDTH
    },
    {
        Header: "PRIHVATLJIVO",
        accessor: "prihvatljivo",
        width: DEFAULT_COLUMN_WIDTH
    }
];