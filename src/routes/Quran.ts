import { Router } from "express";
import * as QuranController from "$controllers/rest/QuranController";

const QuranRoutes = Router({ mergeParams: true });

/**
 * @swagger
 * /quran/sura:
 *   get:
 *     tags: [Quran]
 *     summary: Get Surah Quran
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *       - in: query
 *         name: rows
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *       - in: query
 *         name: orderKey
 *         schema:
 *           type: string
 *         description: Key for sorting
 *       - in: query
 *         name: orderRule
 *         schema:
 *           type: string
 *         description: Sorting rule (asc/desc)
 *       - in: query
 *         name: filters
 *         schema:
 *           type: string
 *         description: Additional filters for surah {"key":"value"} or {"key":"value", "key2":"value2"} or {"key":["value1","value2"]}
 *       - in: query
 *         name: searchFilters
 *         schema:
 *           type: string
 *         description: Search filters for surah {"key":"value"} or {"key":"value", "key2":"value2"}
 *     responses:
 *       200:
 *         description: Successfully retrieved Surah Quran
 *       500:
 *         description: Internal server error
 */
QuranRoutes.get("/sura", QuranController.getSuraQuran);

/**
 * @swagger
 * /quran/ayah:
 *   get:
 *     tags: [Quran]
 *     summary: Get Ayah Quran
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *       - in: query
 *         name: rows
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *       - in: query
 *         name: orderKey
 *         schema:
 *           type: string
 *         description: Key for sorting
 *       - in: query
 *         name: orderRule
 *         schema:
 *           type: string
 *         description: Sorting rule (asc/desc)
 *       - in: query
 *         name: filters
 *         schema:
 *           type: string
 *         description: Additional filters for ayah {"key":"value"} or {"key":"value", "key2":"value2"} or {"key":["value1","value2"]}
 *       - in: query
 *         name: searchFilters
 *         schema:
 *           type: string
 *         description: Search filters for ayah {"key":"value"} or {"key":"value", "key2":"value2"}
 *     responses:
 *       200:
 *         description: Successfully retrieved Ayah Quran
 *       500:
 *         description: Internal server error
 */
QuranRoutes.get("/ayah", QuranController.getAyahQuran);

export default QuranRoutes;