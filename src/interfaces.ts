export type FarmSelectPropsType = {
    onYearChange: (year: string) => void;
    onDefaultViewChange: (isChecked: boolean) => void;
};

export interface columnInterface {
    Header: string,
    accessor: string,
    className?: string,
    headerClassName?: string,
    width?: number
    sticky?: boolean
}

export interface surfacesRowInterface {
    yearOfData?: string,
    id: number,
    parcelId: number,
    crop: string,
    surfaceApplied: number,
    surfaceOverlap: number,
    retroSurfaceOverlap: number | null,
    expEst: number,
    isForceMajeure: number | null,
    admin: null,
    control: null,
    inspection: null,
    okt: number | null,
    surfaceSeen: number,
    retroSurfaceSeen: number | null,
    reduction?: number,
    interpretation?: string,
    ppMines?: number | null,
    ppArkod?: number | null,
    ppKnt?: number | null,
    ppRfv?: null,
    ppNpp?: null,
    ppRetro?: null,
    ppToleration?: null,
    ppTolerationRetro?: null,
    ejSentinel?: boolean | null,
    ejSatelite?: boolean | null,
    ejDocumentation?: boolean | null,
    ejGTF?: null,
    ejTP?: boolean | null,
    monitoring?: string,
    expert?: string,
    visaSila?: boolean | null,
    adminOdluka?: boolean | null,
    adminDecisionRetro?: boolean | null,
    odlukaRetro?: null,
    kntStatus?: boolean
}

export interface cattleRowInterface {
    yearOfData: string,
    rb: number,
    jmbg: number,
    idGrla: number,
    vrsta: string, 
    pasmina: string,
    datumRodenja: string,
    datumIzlucenja: string,
    kontrolaMlijecnosti: boolean,
    prihvatljivo: boolean,
}