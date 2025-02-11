import { Request, Response } from 'express';
import * as QuranService from '$services/QuranService';
import { handleServiceErrorWithResponse, response_success } from '$utils/response.utils';
import { FilteringQueryV2 } from '$entities/Query';

export async function getSuraQuran(req: Request, res: Response): Promise<Response> {
    const filter = req.query as FilteringQueryV2;
    filter.page = Number(filter?.page ?? 1);
    filter.rows = Number(filter?.rows ?? 10);
    filter.filters = typeof filter?.filters === 'string' ? JSON.parse(filter.filters) : {};
    filter.searchFilters = typeof filter?.searchFilters === 'string' ? JSON.parse(filter.searchFilters) : {};

    console.log(filter);

    const serviceResponse = await QuranService.getSuraQuran(filter);

    if (!serviceResponse.status) {
        return handleServiceErrorWithResponse(res, serviceResponse);
    }

    return response_success(res, serviceResponse.data, "Successfully retrieved Surah Quran data!");
}

export async function getAyahQuran(req: Request, res: Response): Promise<Response> {
    const filter = req.query as FilteringQueryV2;
    filter.page = Number(filter?.page ?? 1);
    filter.rows = Number(filter?.rows ?? 10);
    filter.filters = typeof filter?.filters === 'string' ? JSON.parse(filter.filters) : {};
    filter.searchFilters = typeof filter?.searchFilters === 'string' ? JSON.parse(filter.searchFilters) : {};

    const serviceResponse = await QuranService.getAyatQuran(filter);

    if (!serviceResponse.status) {
        return handleServiceErrorWithResponse(res, serviceResponse);
    }

    return response_success(res, serviceResponse.data, "Successfully retrieved Ayah Quran data!");
}