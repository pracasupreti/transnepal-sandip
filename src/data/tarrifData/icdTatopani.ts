export const ICD_TATOPANI = {
    effectiveDate: '17-Aug-2022',
    vehicleEntry: {
        truckTankerTractorTrailor: 259.31,
        lightVehiclesBullockCartUpTo5Ton: 129.69,
        rickshawHandTrolley: 38.94,
        containerTruckFixedContainer: 389.06,
        trailorFlatTruckArticulatedVehicles: {
            TEU: 518.64,
            FEU: 778.13
        }
    },
    cargoHandling: {
        allActivities: {
            TEU: 2593.75,
            FEU: 4668.74
        },
        containerizedCargo: 181.57,
        nonContainerizedBreakBulkPackagedBagged: 181.57,
        nonContainerizedBulkLooseCargo: 129.69
    },
    terminalHandlingCharges: {
        loadedContainer: {
            TEU: 2593.75,
            FEU: 4150.0
        },
        unloadedContainer: {
            TEU: 1296.89,
            FEU: 2075.01
        },
        lclCargo: 518.74
    },
    weighmentCharge: 259.39,
    warehousingCharges: {
        imports: {
            freeTimeHours: 24,
            days2to8: 0.16,
            days9to30: 0.21,
            days31Onwards: 0.31
        },
        exports: {
            freeTimeHours: 24,
            days2to8: 0.08,
            days9to30: 0.1,
            days31Onwards: 0.13
        },
        openYardStorage: {
            days2to8: 0.08,
            days9Onwards: 0.13
        }
    },
    parkingStorageCharges: {
        freightVehicle: {
            freeDays: 1,
            days2to7: {
                vehicle: 389.06,
                TEU: 518.74
            },
            days8Onwards: {
                vehicle: 518.74,
                TEU: 518.74,
                FEU: 778.13
            }
        },
        container: {
            freeDays: 1,
            days2to7: {
                TEU: 389.06,
                FEU: 518.74
            },
            days8Onwards: {
                TEU: 518.74,
                FEU: 778.13
            }
        }
    },
    cleaningContainers: {
        TEU: 259.39,
        FEU: 389.06
    },
    subLeaseCharges: {
        unfurnishedRoomMainTerminal: 1071.81 // per m2 per month
    },
    forkliftCharges: {
        completeCycle: {
            TEU: 3865.22,
            FEU: 7730.45
        },
        singleCycle: {
            TEU: 2013.8,
            FEU: 4026.28
        },
        nonContainerisedPerTon: 242.42
    }
};
