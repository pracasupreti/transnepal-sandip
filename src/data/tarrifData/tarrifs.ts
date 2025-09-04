export const TARIFFS = {
    VEHICLE_ENTRY: {
        TRUCK_TANKER_TRACTOR_TRAILOR: 259.31,
        LIGHT_VEHICLES_BULLOCK_CART_UPTO_5TON: 129.69,
        RICKSHAW_HAND_TROLLEY: 38.94,
        CONTAINER_TRUCK_FIXED_CONTAINER: 389.06,
        TRAILOR_FLAT_TRUCK_ARTICULATED_VEHICLE: {
            TEU: 518.64,
            FEU: 778.13
        }
    },
    CARGO_HANDLING: {
        ALL_ACTIVITIES: {
            TEU: 2593.75,
            FEU: 4668.74
        },
        CONTAINERIZED_CARGO: 181.57,
        NON_CONTAINERIZED_BREAK_BULK_PACKAGED_BAGGED: 181.57,
        NON_CONTAINERIZED_BULK_LOOSE_CARGO: 129.69
    },
    TERMINAL_HANDLING_CHARGES: {
        LOADED_CONTAINER: {
            TEU: 2593.75,
            FEU: 4150.0
        },
        UNLOADED_CONTAINER: {
            TEU: 1296.89,
            FEU: 2075.01
        },
        LCL_CARGO: 518.74
    },
    WEIGHMENT_CHARGE: 259.39,
    WAREHOUSING_CHARGES: {
        IMPORTS: {
            FREE_TIME_DAYS: 1, // 24 hours free time from arrival assumed
            DAYS_2_TO_8: 0.16,
            DAYS_9_TO_30: 0.21,
            DAYS_31_ONWARDS: 0.31
        },
        EXPORTS: {
            FREE_TIME_DAYS: 1,
            DAYS_2_TO_8: 0.08,
            DAYS_9_TO_30: 0.1,
            DAYS_31_ONWARDS: 0.13
        },
        OPEN_YARD_STORAGE: {
            DAYS_2_TO_8: 0.08,
            DAYS_9_ONWARDS: 0.13
        }
    },
    PARKING_STORAGE_CHARGES: {
        FREIGHT_VEHICLE: {
            FREE_DAYS: 1,
            DAYS_2_TO_7: {
                VEHICLE: 389.06,
                TEU: 518.74
            },
            DAYS_8_ONWARDS: {
                VEHICLE: 518.74,
                TEU: 518.74,
                FEU: 778.13
            }
        },
        CONTAINER: {
            FREE_DAYS: 1,
            DAYS_2_TO_7: {
                TEU: 389.06,
                FEU: 518.74
            },
            DAYS_8_ONWARDS: {
                TEU: 518.74,
                FEU: 778.13
            }
        }
    },
    CLEANING_CONTAINERS: {
        TEU: 259.39,
        FEU: 389.06
    },
    SUB_LEASE_CHARGES: {
        UNFURNISHED_ROOM_MAIN_TERMINAL: 1071.81 // per m2 per month
    },
    FORKLIFT_CHARGES: {
        COMPLETE_CYCLE: {
            TEU: 3865.22,
            FEU: 7730.45
        },
        SINGLE_CYCLE: {
            TEU: 2013.8,
            FEU: 4026.28
        },
        NON_CONTAINERISED_PER_TON: 242.42
    },

    RAIL_HANDLING_CHARGES_AT_ICP_BIRATNAGAR: {
        IMPORT_TERMINAL_HANDLING: {
            FACTORY_DESTUFFING: {
                TEU: 7054.3,
                FEU: 9716.3
            },
            ICP_DESTUFFING: {
                TEU: 9111.3,
                FEU: 12136.3
            },
            WAREHOUSE_DELIVERY: {
                TEU: 9111.3,
                FEU: 12136.3
            }
        },
        EXPORT_TERMINAL_HANDLING: {
            FACTORY_DESTUFFING: {
                TEU: 7054.3,
                FEU: 9716.3
            },
            ICP_DESTUFFING: {
                TEU: 9111.3,
                FEU: 12136.3
            },
            WAREHOUSE_DELIVERY: {
                TEU: 9111.3,
                FEU: 12136.3
            }
        },
        TERMINAL_HANDLING_BREAKUP: {
            LOADED_CONTAINER_HANDLING_COMPLETE_CYCLE: {
                TEU: 3993,
                FEU: 5390.55
            },
            EMPTY_CONTAINER_HANDLING_COMPLETE_CYCLE: {
                TEU: 865.15,
                FEU: 1331
            },
            TRANSFER_EMPTY_CONTAINER_SURVEY: {
                TEU: 1331,
                FEU: 1663.75
            },
            TRANSFER_LOADED_CONTAINER_SURVEY: {
                TEU: 865.15,
                FEU: 1311
            },
            TOTAL_TERMINAL_HANDLING_CHARGES: {
                TEU: 7054.3,
                FEU: 9716.3
            },
            LABOUR_CHARGE: {
                TEU: 2057,
                FEU: 2420
            },
            ICP_DESTUFFING_TOTAL: {
                TEU: 9111.3,
                FEU: 12136.3
            }
        },
        TERMINAL_HANDLING_BREAK_BULK_BAGGED_BULK_LOOSE_CARGO: {
            BAGGED_BREAK_BULK_CARGO: 271.04, // per MT + ...
            BULK_LOOSE_CARGO: 399.3 // per MT
        }
    }
};
