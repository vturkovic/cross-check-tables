import { surfacesColumnData } from "./data/surfaces/columnData";
import { surfacesRowData } from "./data/surfaces/rowData";

const filterDataByYear = (data: any, year: string) => {
    return data.filter((obj: any) => obj.yearOfData === year);
};

export const getRoutes = (yearOfData: string) => {
    return [
        { path: "/", component: null },
        { path: "surfaces/", component: { columns: surfacesColumnData, data: filterDataByYear(surfacesRowData, yearOfData)} },
        { path: "pvp-p/", component: { columns: surfacesColumnData, data: surfacesRowData } },
        { path: "pvp-v/", component: { columns: surfacesColumnData, data: surfacesRowData } },
        { path: "pvp-sr/", component: { columns: surfacesColumnData, data: surfacesRowData } },
        { path: "kfk/", component: { columns: surfacesColumnData, data: surfacesRowData } },
        { path: "muk/", component: { columns: surfacesColumnData, data: surfacesRowData } },
        { path: "mkš/", component: { columns: surfacesColumnData, data: surfacesRowData } },
        { path: "tvpv/", component: { columns: surfacesColumnData, data: surfacesRowData } },
        { path: "ekop/", component: { columns: surfacesColumnData, data: surfacesRowData } },
        { path: "eko/", component: { columns: surfacesColumnData, data: surfacesRowData } },
        { path: "cattle/", component: { columns: surfacesColumnData, data: surfacesRowData } },
        { path: "amounts/", component: { columns: surfacesColumnData, data: surfacesRowData } },
        { path: "ezp/", component: { columns: surfacesColumnData, data: surfacesRowData } },
        { path: "*", component: { navigate: true, to: "/" } },
    ];
};

export const routes = [
    { path: "/", component: null },
    { path: "surfaces/", component: { columns: surfacesColumnData, data: filterDataByYear(surfacesRowData, '2023')} },
    { path: "pvp-p/", component: { columns: surfacesColumnData, data: surfacesRowData } },
    { path: "pvp-v/", component: { columns: surfacesColumnData, data: surfacesRowData } },
    { path: "pvp-sr/", component: { columns: surfacesColumnData, data: surfacesRowData } },
    { path: "kfk/", component: { columns: surfacesColumnData, data: surfacesRowData } },
    { path: "muk/", component: { columns: surfacesColumnData, data: surfacesRowData } },
    { path: "mkš/", component: { columns: surfacesColumnData, data: surfacesRowData } },
    { path: "tvpv/", component: { columns: surfacesColumnData, data: surfacesRowData } },
    { path: "ekop/", component: { columns: surfacesColumnData, data: surfacesRowData } },
    { path: "eko/", component: { columns: surfacesColumnData, data: surfacesRowData } },
    { path: "cattle/", component: { columns: surfacesColumnData, data: surfacesRowData } },
    { path: "amounts/", component: { columns: surfacesColumnData, data: surfacesRowData } },
    { path: "ezp/", component: { columns: surfacesColumnData, data: surfacesRowData } },
    { path: "*", component: { navigate: true, to: "/" } },
];