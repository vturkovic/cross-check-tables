import { 
    surfacesColumnData, 
    surfacesRowData  
} from './data/data';

const defaultViewProps = ['id', 'parcelId', 'crop', 'surfaceApplied', 'surfaceOverlap', 'retroSurfaceOverlap', 'expEst', 'isForceMajeure', 'admin', 'control', 'inspection', 'okt', 'surfaceSeen', 'retroSurfaceSeen'];

const filterColumnData = (data: any[], defaultView: boolean) => {
    if (defaultView) {
        return data.filter((obj: any) => {
            return defaultViewProps.includes(obj.accessor);
        });
    }
    return data;
};


const filterDataByYear = (data: any[], year: string) => {
    return data.filter((obj: any) => obj.yearOfData === year);
};


export const getRoutes = (defaultView: boolean, yearOfData: string) => {
    return [
        { path: "/", component: null },
        { path: "surfaces/", component: { columns: filterColumnData(surfacesColumnData, defaultView), data: filterDataByYear(surfacesRowData, yearOfData) } },
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