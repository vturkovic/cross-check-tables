import { 
    surfacesColumnData, 
    surfacesRowData,
    pvpPColumnData,
    pvpPRowData,
    pvpVColumnData,
    pvpVRowData,
    pvpSRColumnData,
    pvpSRRowData,
    pvpKPUColumnData,
    pvpKPURowData,
    kfkColumnData,
    kfkRowData,
    mksColumnData,
    mksRowData,
    mukColumnData,
    mukRowData,
    tvpvColumnData,
    tvpvRowData,
    ekoColumnData,
    ekoRowData,
    ekopColumnData,
    ekopRowData,
    cattleColumnData,
    cattleRowData,  
    amountsColumnData,
    amountsRowData,  
    ezpColumnData,
    ezpRowData
} from './data/data';

const surfacesDefaultViewProps = ['id', 'parcelId', 'crop', 'surfaceApplied', 'surfaceOverlap', 'retroSurfaceOverlap', 'expEst', 'isForceMajeure', 'admin', 'control', 'inspection', 'okt', 'surfaceSeen', 'retroSurfaceSeen'];

const filterColumnData = (data: any[], detailedView: boolean, defaultViewProps: string[]) => {
    if (!detailedView) {
        return data.filter((obj: any) => {
            return defaultViewProps.includes(obj.accessor);
        });
    }
    return data;
};

const filterDataByYear = (data: any[], year: string) => {
    return data.filter((obj: any) => obj.yearOfData === year);
};

export const getRoutes = (detailedView: boolean, yearOfData: string) => {
    return [
        { path: "/", component: null },
        { path: "surfaces/", component: { columns: filterColumnData(surfacesColumnData, detailedView, surfacesDefaultViewProps), data: filterDataByYear(surfacesRowData, yearOfData) } },
        { path: "pvp-p/", component: { columns: filterColumnData(pvpPColumnData, detailedView, surfacesDefaultViewProps), data: filterDataByYear(pvpPRowData, yearOfData) } },
        { path: "pvp-v/", component: { columns: filterColumnData(pvpVColumnData, detailedView, surfacesDefaultViewProps), data: filterDataByYear(pvpVRowData, yearOfData) } },
        { path: "pvp-sr/", component: { columns: filterColumnData(pvpSRColumnData, detailedView, surfacesDefaultViewProps), data: filterDataByYear(pvpSRRowData, yearOfData) } },
        { path: "kfk/", component: { columns: filterColumnData(pvpKPUColumnData, detailedView, surfacesDefaultViewProps), data: filterDataByYear(pvpKPURowData, yearOfData) } },
        { path: "muk/", component: { columns: filterColumnData(kfkColumnData, detailedView, surfacesDefaultViewProps), data: filterDataByYear(kfkRowData, yearOfData) } },
        { path: "mkš/", component: { columns: filterColumnData(mksColumnData, detailedView, surfacesDefaultViewProps), data: filterDataByYear(mksRowData, yearOfData) } },
        { path: "tvpv/", component: { columns: filterColumnData(mukColumnData, detailedView, surfacesDefaultViewProps), data: filterDataByYear(mukRowData, yearOfData) } },
        { path: "ekop/", component: { columns: filterColumnData(tvpvColumnData, detailedView, surfacesDefaultViewProps), data: filterDataByYear(tvpvRowData, yearOfData) } },
        { path: "eko/", component: { columns: filterColumnData(ekoColumnData, detailedView, surfacesDefaultViewProps), data: filterDataByYear(ekoRowData, yearOfData) } },
        { path: "eko/", component: { columns: filterColumnData(ekopColumnData, detailedView, surfacesDefaultViewProps), data: filterDataByYear(ekopRowData, yearOfData) } },
        { path: "cattle/", component: { columns: cattleColumnData, data: filterDataByYear(cattleRowData, yearOfData) } },
        { path: "amounts/", component: { columns: filterColumnData(amountsColumnData, detailedView, surfacesDefaultViewProps), data: filterDataByYear(amountsRowData, yearOfData) } },
        { path: "ezp/", component: { columns: filterColumnData(ezpColumnData, detailedView, surfacesDefaultViewProps), data: filterDataByYear(ezpRowData, yearOfData) } },
        { path: "*", component: { navigate: true, to: "/" } },
    ];
};

export const routes = [
    { path: "/", component: null },
    { path: "surfaces/", component: { columns: surfacesColumnData, data: filterDataByYear(surfacesRowData, '2023')} },
    { path: "pvp-p/", component: { columns: surfacesColumnData, data: surfacesRowData } },
    { path: "pvp-v/", component: { columns: surfacesColumnData, data: surfacesRowData } },
    { path: "pvp-sr/", component: { columns: surfacesColumnData, data: surfacesRowData } },
    { path: "pvp-kpu/", component: { columns: surfacesColumnData, data: surfacesRowData } },
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