export const ICP_BIRATNAGAR = {
    vehicleEntry: {
        truckTankerTractorTrailor: 259.31,
        lightVehiclesBullockCartUpTo5Ton: 129.69,
        rickshawHandTrolley: 38.94,
        containerTruckFixedContainer: 389.06,
        trailorFlatTruckArticulatedVehicle: {
            teu: 518.64,
            feu: 778.13
        }
    },
    cargoHandling: {
        allActivities: {
            teu: 2593.75,
            feu: 4668.74
        },
        containerizedCargo: 181.57,
        nonContainerizedBreakBulkPackagedBagged: 181.57,
        nonContainerizedBulkLooseCargo: 129.69
    },
    terminalHandlingCharges: {
        loadedContainer: {
            teu: 2593.75,
            feu: 4150.0
        },
        unloadedContainer: {
            teu: 1296.89,
            feu: 2075.01
        },
        lclCargo: 518.74
    },
    weighmentCharge: 259.39,
    warehousingCharges: {
        imports: {
            freeTimeDays: 1, // 24 hours free time from arrival assumed
            days2To8: 0.16,
            days9To30: 0.21,
            days31Onwards: 0.31
        },
        exports: {
            freeTimeDays: 1,
            days2To8: 0.08,
            days9To30: 0.1,
            days31Onwards: 0.13
        },
        openYardStorage: {
            days2To8: 0.08,
            days9Onwards: 0.13
        }
    },
    parkingStorageCharges: {
        freightVehicle: {
            freeDays: 1,
            days2To7: {
                vehicle: 389.06,
                teu: 518.74
            },
            days8Onwards: {
                vehicle: 518.74,
                teu: 518.74,
                feu: 778.13
            }
        },
        container: {
            freeDays: 1,
            days2To7: {
                teu: 389.06,
                feu: 518.74
            },
            days8Onwards: {
                teu: 518.74,
                feu: 778.13
            }
        }
    },
    cleaningContainers: {
        teu: 259.39,
        feu: 389.06
    },
    subLeaseCharges: {
        unfurnishedRoomMainTerminal: 1071.81 // per m2 per month
    },
    forkliftCharges: {
        completeCycle: {
            teu: 3865.22,
            feu: 7730.45
        },
        singleCycle: {
            teu: 2013.8,
            feu: 4026.28
        },
        nonContainerisedPerTon: 242.42
    },

    railHandlingChargesAtIcpBiratnagar: {
        importTerminalHandling: {
            factoryDestuffing: {
                teu: 7054.3,
                feu: 9716.3
            },
            icpDestuffing: {
                teu: 9111.3,
                feu: 12136.3
            },
            warehouseDelivery: {
                teu: 9111.3,
                feu: 12136.3
            }
        },
        exportTerminalHandling: {
            factoryDestuffing: {
                teu: 7054.3,
                feu: 9716.3
            },
            icpDestuffing: {
                teu: 9111.3,
                feu: 12136.3
            },
            warehouseDelivery: {
                teu: 9111.3,
                feu: 12136.3
            }
        },
        terminalHandlingBreakup: {
            loadedContainerHandlingCompleteCycle: {
                teu: 3993,
                feu: 5390.55
            },
            emptyContainerHandlingCompleteCycle: {
                teu: 865.15,
                feu: 1331
            },
            transferEmptyContainerSurvey: {
                teu: 1331,
                feu: 1663.75
            },
            transferLoadedContainerSurvey: {
                teu: 865.15,
                feu: 1311
            },
            totalTerminalHandlingCharges: {
                teu: 7054.3,
                feu: 9716.3
            },
            labourCharge: {
                teu: 2057,
                feu: 2420
            },
            icpDestuffingTotal: {
                teu: 9111.3,
                feu: 12136.3
            }
        },
        terminalHandlingBreakBulkBaggedBulkLooseCargo: {
            baggedBreakBulkCargo: 271.04, // per MT + ...
            bulkLooseCargo: 399.3 // per MT
        }
    }
};
