import { INTERNAL_SERVER_ERROR_SERVICE_RESPONSE, ServiceResponse } from '$entities/Service';
import { prisma } from "$utils/prisma.utils";
import Logger from "$pkg/logger";
import { FilteringQueryV2 } from '$entities/Query';
import { buildFilterQueryLimitOffsetV2 } from './helpers/FilterQueryV2';

export async function getSuraQuran(filter: FilteringQueryV2): Promise<ServiceResponse<any>> {
    try {
        const whereClause = buildFilterQueryLimitOffsetV2(filter);

        const [sura, totalData] = await Promise.all([
            prisma.sura.findMany(whereClause),
            prisma.sura.count({ where: whereClause.where })
        ]);

        return {
            status: true,
            data: {
                sura,
                info: {
                    page: filter.page ?? 1,
                    perPage: filter.rows ?? 10,
                    totalData: totalData,
                    totalPage: Math.ceil(totalData / (filter.rows ?? 10)),
                }
            }
        }
    } catch (err) {
        Logger.error(`QuranService.getSuraQuran : ${err}`)
        return INTERNAL_SERVER_ERROR_SERVICE_RESPONSE
    }
}

export async function getAyatQuran(filter: FilteringQueryV2): Promise<ServiceResponse<any>> {
    try {
        const whereClause = buildFilterQueryLimitOffsetV2(filter);

        const [quran, totalData] = await Promise.all([
            prisma.quran.findMany(whereClause),
            prisma.quran.count({ where: whereClause.where })
        ]);

        return {
            status: true,
            data: {
                quran,
                info: {
                    page: filter.page ?? 1,
                    perPage: filter.rows ?? 10,
                    totalData: totalData,
                    totalPage: Math.ceil(totalData / (filter.rows ?? 10)),
                }
            }
        }
        
    } catch (err) {
        Logger.error(`QuranService.getAyatQuran : ${err}`)
        return INTERNAL_SERVER_ERROR_SERVICE_RESPONSE
    }
}
