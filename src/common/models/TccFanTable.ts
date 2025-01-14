/*!
 * Copyright (c) 2019-2021 TUXEDO Computers GmbH <tux@tuxedocomputers.com>
 *
 * This file is part of TUXEDO Control Center.
 *
 * TUXEDO Control Center is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * TUXEDO Control Center is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with TUXEDO Control Center.  If not, see <https://www.gnu.org/licenses/>.
 */
export interface ITccFanProfile {
    name: string;
    tableCPU: ITccFanTableEntry[];
    tableGPU: ITccFanTableEntry[];
}

export interface ITccFanTableEntry {
    temp: number;
    speed: number;
}

export const defaultFanProfiles = [
    {
        name: 'Silent',
        tableCPU: [
            { temp: 0, speed: 0 },
            { temp: 1, speed: 0 },
            { temp: 2, speed: 0 },
            { temp: 3, speed: 0 },
            { temp: 4, speed: 0 },
            { temp: 5, speed: 0 },
            { temp: 6, speed: 0 },
            { temp: 7, speed: 0 },
            { temp: 8, speed: 0 },
            { temp: 9, speed: 0 },
            { temp: 10, speed: 0 },
            { temp: 11, speed: 0 },
            { temp: 12, speed: 0 },
            { temp: 13, speed: 0 },
            { temp: 14, speed: 0 },
            { temp: 15, speed: 0 },
            { temp: 16, speed: 0 },
            { temp: 17, speed: 0 },
            { temp: 18, speed: 0 },
            { temp: 19, speed: 0 },
            { temp: 20, speed: 0 },
            { temp: 21, speed: 0 },
            { temp: 22, speed: 0 },
            { temp: 23, speed: 0 },
            { temp: 24, speed: 0 },
            { temp: 25, speed: 0 },
            { temp: 26, speed: 0 },
            { temp: 27, speed: 0 },
            { temp: 28, speed: 0 },
            { temp: 29, speed: 0 },
            { temp: 30, speed: 0 },
            { temp: 31, speed: 0 },
            { temp: 32, speed: 0 },
            { temp: 33, speed: 0 },
            { temp: 34, speed: 0 },
            { temp: 35, speed: 0 },
            { temp: 36, speed: 0 },
            { temp: 37, speed: 0 },
            { temp: 38, speed: 0 },
            { temp: 39, speed: 0 },
            { temp: 40, speed: 0 },
            { temp: 41, speed: 0 },
            { temp: 42, speed: 0 },
            { temp: 43, speed: 0 },
            { temp: 44, speed: 0 },
            { temp: 45, speed: 0 },
            { temp: 46, speed: 0 },
            { temp: 47, speed: 0 },
            { temp: 48, speed: 0 },
            { temp: 49, speed: 0 },
            { temp: 50, speed: 0 },
            { temp: 51, speed: 0 },
            { temp: 52, speed: 0 },
            { temp: 53, speed: 0 },
            { temp: 54, speed: 0 },
            { temp: 55, speed: 0 },
            { temp: 56, speed: 0 },
            { temp: 57, speed: 0 },
            { temp: 58, speed: 0 },
            { temp: 59, speed: 0 },
            { temp: 60, speed: 0 },
            { temp: 61, speed: 0 },
            { temp: 62, speed: 0 },
            { temp: 63, speed: 0 },
            { temp: 64, speed: 0 },
            { temp: 65, speed: 0 },
            { temp: 66, speed: 0 },
            { temp: 67, speed: 0 },
            { temp: 68, speed: 39 },
            { temp: 69, speed: 39 },
            { temp: 70, speed: 39 },
            { temp: 71, speed: 39 },
            { temp: 72, speed: 39 },
            { temp: 73, speed: 39 },
            { temp: 74, speed: 55 },
            { temp: 75, speed: 55 },
            { temp: 76, speed: 55 },
            { temp: 77, speed: 55 },
            { temp: 78, speed: 60 },
            { temp: 79, speed: 60 },
            { temp: 80, speed: 60 },
            { temp: 81, speed: 60 },
            { temp: 82, speed: 70 },
            { temp: 83, speed: 70 },
            { temp: 84, speed: 70 },
            { temp: 85, speed: 70 },
            { temp: 86, speed: 70 },
            { temp: 87, speed: 70 },
            { temp: 88, speed: 80 },
            { temp: 89, speed: 80 },
            { temp: 90, speed: 80 },
            { temp: 91, speed: 90 },
            { temp: 92, speed: 90 },
            { temp: 93, speed: 95 },
            { temp: 94, speed: 95 },
            { temp: 95, speed: 100 },
            { temp: 96, speed: 100 },
            { temp: 97, speed: 100 },
            { temp: 98, speed: 100 },
            { temp: 99, speed: 100 },
            { temp: 100, speed: 100 }
        ],
        tableGPU: [
            { temp: 0, speed: 0 },
            { temp: 1, speed: 0 },
            { temp: 2, speed: 0 },
            { temp: 3, speed: 0 },
            { temp: 4, speed: 0 },
            { temp: 5, speed: 0 },
            { temp: 6, speed: 0 },
            { temp: 7, speed: 0 },
            { temp: 8, speed: 0 },
            { temp: 9, speed: 0 },
            { temp: 10, speed: 0 },
            { temp: 11, speed: 0 },
            { temp: 12, speed: 0 },
            { temp: 13, speed: 0 },
            { temp: 14, speed: 0 },
            { temp: 15, speed: 0 },
            { temp: 16, speed: 0 },
            { temp: 17, speed: 0 },
            { temp: 18, speed: 0 },
            { temp: 19, speed: 0 },
            { temp: 20, speed: 0 },
            { temp: 21, speed: 0 },
            { temp: 22, speed: 0 },
            { temp: 23, speed: 0 },
            { temp: 24, speed: 0 },
            { temp: 25, speed: 0 },
            { temp: 26, speed: 0 },
            { temp: 27, speed: 0 },
            { temp: 28, speed: 0 },
            { temp: 29, speed: 0 },
            { temp: 30, speed: 0 },
            { temp: 31, speed: 0 },
            { temp: 32, speed: 0 },
            { temp: 33, speed: 0 },
            { temp: 34, speed: 0 },
            { temp: 35, speed: 0 },
            { temp: 36, speed: 0 },
            { temp: 37, speed: 0 },
            { temp: 38, speed: 0 },
            { temp: 39, speed: 0 },
            { temp: 40, speed: 0 },
            { temp: 41, speed: 0 },
            { temp: 42, speed: 0 },
            { temp: 43, speed: 0 },
            { temp: 44, speed: 0 },
            { temp: 45, speed: 0 },
            { temp: 46, speed: 0 },
            { temp: 47, speed: 0 },
            { temp: 48, speed: 0 },
            { temp: 49, speed: 0 },
            { temp: 50, speed: 0 },
            { temp: 51, speed: 0 },
            { temp: 52, speed: 0 },
            { temp: 53, speed: 0 },
            { temp: 54, speed: 0 },
            { temp: 55, speed: 0 },
            { temp: 56, speed: 0 },
            { temp: 57, speed: 0 },
            { temp: 58, speed: 0 },
            { temp: 59, speed: 0 },
            { temp: 60, speed: 0 },
            { temp: 61, speed: 0 },
            { temp: 62, speed: 0 },
            { temp: 63, speed: 0 },
            { temp: 64, speed: 29 },
            { temp: 65, speed: 29 },
            { temp: 66, speed: 29 },
            { temp: 67, speed: 39 },
            { temp: 68, speed: 39 },
            { temp: 69, speed: 55 },
            { temp: 70, speed: 55 },
            { temp: 71, speed: 55 },
            { temp: 72, speed: 55 },
            { temp: 73, speed: 55 },
            { temp: 74, speed: 55 },
            { temp: 75, speed: 55 },
            { temp: 76, speed: 55 },
            { temp: 77, speed: 55 },
            { temp: 78, speed: 55 },
            { temp: 79, speed: 70 },
            { temp: 80, speed: 70 },
            { temp: 81, speed: 70 },
            { temp: 82, speed: 70 },
            { temp: 83, speed: 70 },
            { temp: 84, speed: 70 },
            { temp: 85, speed: 80 },
            { temp: 86, speed: 80 },
            { temp: 87, speed: 80 },
            { temp: 88, speed: 90 },
            { temp: 89, speed: 90 },
            { temp: 90, speed: 90 },
            { temp: 91, speed: 100 },
            { temp: 92, speed: 100 },
            { temp: 93, speed: 100 },
            { temp: 94, speed: 100 },
            { temp: 95, speed: 100 },
            { temp: 96, speed: 100 },
            { temp: 97, speed: 100 },
            { temp: 98, speed: 100 },
            { temp: 99, speed: 100 },
            { temp: 100, speed: 100 }
        ]
    },
    {
        name: 'Quiet',
        tableCPU: [
            { temp: 0, speed: 0 },
            { temp: 1, speed: 0 },
            { temp: 2, speed: 0 },
            { temp: 3, speed: 0 },
            { temp: 4, speed: 0 },
            { temp: 5, speed: 0 },
            { temp: 6, speed: 0 },
            { temp: 7, speed: 0 },
            { temp: 8, speed: 0 },
            { temp: 9, speed: 0 },
            { temp: 10, speed: 0 },
            { temp: 11, speed: 0 },
            { temp: 12, speed: 0 },
            { temp: 13, speed: 0 },
            { temp: 14, speed: 0 },
            { temp: 15, speed: 0 },
            { temp: 16, speed: 0 },
            { temp: 17, speed: 0 },
            { temp: 18, speed: 0 },
            { temp: 19, speed: 0 },
            { temp: 20, speed: 0 },
            { temp: 21, speed: 0 },
            { temp: 22, speed: 0 },
            { temp: 23, speed: 0 },
            { temp: 24, speed: 0 },
            { temp: 25, speed: 0 },
            { temp: 26, speed: 0 },
            { temp: 27, speed: 0 },
            { temp: 28, speed: 0 },
            { temp: 29, speed: 0 },
            { temp: 30, speed: 0 },
            { temp: 31, speed: 0 },
            { temp: 32, speed: 0 },
            { temp: 33, speed: 0 },
            { temp: 34, speed: 0 },
            { temp: 35, speed: 0 },
            { temp: 36, speed: 0 },
            { temp: 37, speed: 0 },
            { temp: 38, speed: 0 },
            { temp: 39, speed: 0 },
            { temp: 40, speed: 0 },
            { temp: 41, speed: 0 },
            { temp: 42, speed: 0 },
            { temp: 43, speed: 0 },
            { temp: 44, speed: 0 },
            { temp: 45, speed: 0 },
            { temp: 46, speed: 0 },
            { temp: 47, speed: 0 },
            { temp: 48, speed: 0 },
            { temp: 49, speed: 0 },
            { temp: 50, speed: 0 },
            { temp: 51, speed: 0 },
            { temp: 52, speed: 0 },
            { temp: 53, speed: 0 },
            { temp: 54, speed: 0 },
            { temp: 55, speed: 0 },
            { temp: 56, speed: 0 },
            { temp: 57, speed: 29 },
            { temp: 58, speed: 29 },
            { temp: 59, speed: 29 },
            { temp: 60, speed: 29 },
            { temp: 61, speed: 29 },
            { temp: 62, speed: 39 },
            { temp: 63, speed: 39 },
            { temp: 64, speed: 39 },
            { temp: 65, speed: 39 },
            { temp: 66, speed: 39 },
            { temp: 67, speed: 39 },
            { temp: 68, speed: 39 },
            { temp: 69, speed: 39 },
            { temp: 70, speed: 39 },
            { temp: 71, speed: 39 },
            { temp: 72, speed: 39 },
            { temp: 73, speed: 55 },
            { temp: 74, speed: 55 },
            { temp: 75, speed: 55 },
            { temp: 76, speed: 55 },
            { temp: 77, speed: 55 },
            { temp: 78, speed: 55 },
            { temp: 79, speed: 55 },
            { temp: 80, speed: 70 },
            { temp: 81, speed: 70 },
            { temp: 82, speed: 70 },
            { temp: 83, speed: 70 },
            { temp: 84, speed: 70 },
            { temp: 85, speed: 70 },
            { temp: 86, speed: 80 },
            { temp: 87, speed: 80 },
            { temp: 88, speed: 80 },
            { temp: 89, speed: 90 },
            { temp: 90, speed: 90 },
            { temp: 91, speed: 90 },
            { temp: 92, speed: 90 },
            { temp: 93, speed: 95 },
            { temp: 94, speed: 95 },
            { temp: 95, speed: 100 },
            { temp: 96, speed: 100 },
            { temp: 97, speed: 100 },
            { temp: 98, speed: 100 },
            { temp: 99, speed: 100 },
            { temp: 100, speed: 100 }
        ],
        tableGPU: [
            { temp: 0, speed: 0 },
            { temp: 1, speed: 0 },
            { temp: 2, speed: 0 },
            { temp: 3, speed: 0 },
            { temp: 4, speed: 0 },
            { temp: 5, speed: 0 },
            { temp: 6, speed: 0 },
            { temp: 7, speed: 0 },
            { temp: 8, speed: 0 },
            { temp: 9, speed: 0 },
            { temp: 10, speed: 0 },
            { temp: 11, speed: 0 },
            { temp: 12, speed: 0 },
            { temp: 13, speed: 0 },
            { temp: 14, speed: 0 },
            { temp: 15, speed: 0 },
            { temp: 16, speed: 0 },
            { temp: 17, speed: 0 },
            { temp: 18, speed: 0 },
            { temp: 19, speed: 0 },
            { temp: 20, speed: 0 },
            { temp: 21, speed: 0 },
            { temp: 22, speed: 0 },
            { temp: 23, speed: 0 },
            { temp: 24, speed: 0 },
            { temp: 25, speed: 0 },
            { temp: 26, speed: 0 },
            { temp: 27, speed: 0 },
            { temp: 28, speed: 0 },
            { temp: 29, speed: 0 },
            { temp: 30, speed: 0 },
            { temp: 31, speed: 0 },
            { temp: 32, speed: 0 },
            { temp: 33, speed: 0 },
            { temp: 34, speed: 0 },
            { temp: 35, speed: 0 },
            { temp: 36, speed: 0 },
            { temp: 37, speed: 0 },
            { temp: 38, speed: 0 },
            { temp: 39, speed: 0 },
            { temp: 40, speed: 0 },
            { temp: 41, speed: 0 },
            { temp: 42, speed: 0 },
            { temp: 43, speed: 0 },
            { temp: 44, speed: 0 },
            { temp: 45, speed: 0 },
            { temp: 46, speed: 0 },
            { temp: 47, speed: 0 },
            { temp: 48, speed: 0 },
            { temp: 49, speed: 0 },
            { temp: 50, speed: 0 },
            { temp: 51, speed: 30 },
            { temp: 52, speed: 30 },
            { temp: 53, speed: 30 },
            { temp: 54, speed: 30 },
            { temp: 55, speed: 30 },
            { temp: 56, speed: 30 },
            { temp: 57, speed: 30 },
            { temp: 58, speed: 30 },
            { temp: 59, speed: 30 },
            { temp: 60, speed: 30 },
            { temp: 61, speed: 30 },
            { temp: 62, speed: 30 },
            { temp: 63, speed: 30 },
            { temp: 64, speed: 30 },
            { temp: 65, speed: 30 },
            { temp: 66, speed: 30 },
            { temp: 67, speed: 30 },
            { temp: 68, speed: 30 },
            { temp: 69, speed: 45 },
            { temp: 70, speed: 45 },
            { temp: 71, speed: 45 },
            { temp: 72, speed: 45 },
            { temp: 73, speed: 45 },
            { temp: 74, speed: 45 },
            { temp: 75, speed: 46 },
            { temp: 76, speed: 48 },
            { temp: 77, speed: 52 },
            { temp: 78, speed: 52 },
            { temp: 79, speed: 55 },
            { temp: 80, speed: 55 },
            { temp: 81, speed: 60 },
            { temp: 82, speed: 60 },
            { temp: 83, speed: 65 },
            { temp: 84, speed: 65 },
            { temp: 85, speed: 70 },
            { temp: 86, speed: 70 },
            { temp: 87, speed: 80 },
            { temp: 88, speed: 80 },
            { temp: 89, speed: 90 },
            { temp: 90, speed: 90 },
            { temp: 91, speed: 100 },
            { temp: 92, speed: 100 },
            { temp: 93, speed: 100 },
            { temp: 94, speed: 100 },
            { temp: 95, speed: 100 },
            { temp: 96, speed: 100 },
            { temp: 97, speed: 100 },
            { temp: 98, speed: 100 },
            { temp: 99, speed: 100 },
            { temp: 100, speed: 100 }
        ]
    },
    {
        name: 'Balanced',
        tableCPU: [
            { temp: 0, speed: 0 },
            { temp: 1, speed: 0 },
            { temp: 2, speed: 0 },
            { temp: 3, speed: 0 },
            { temp: 4, speed: 0 },
            { temp: 5, speed: 0 },
            { temp: 6, speed: 0 },
            { temp: 7, speed: 0 },
            { temp: 8, speed: 0 },
            { temp: 9, speed: 0 },
            { temp: 10, speed: 0 },
            { temp: 11, speed: 0 },
            { temp: 12, speed: 0 },
            { temp: 13, speed: 0 },
            { temp: 14, speed: 0 },
            { temp: 15, speed: 0 },
            { temp: 16, speed: 0 },
            { temp: 17, speed: 0 },
            { temp: 18, speed: 0 },
            { temp: 19, speed: 0 },
            { temp: 20, speed: 0 },
            { temp: 21, speed: 0 },
            { temp: 22, speed: 0 },
            { temp: 23, speed: 0 },
            { temp: 24, speed: 0 },
            { temp: 25, speed: 0 },
            { temp: 26, speed: 0 },
            { temp: 27, speed: 0 },
            { temp: 28, speed: 0 },
            { temp: 29, speed: 0 },
            { temp: 30, speed: 0 },
            { temp: 31, speed: 0 },
            { temp: 32, speed: 0 },
            { temp: 33, speed: 0 },
            { temp: 34, speed: 0 },
            { temp: 35, speed: 0 },
            { temp: 36, speed: 0 },
            { temp: 37, speed: 0 },
            { temp: 38, speed: 0 },
            { temp: 39, speed: 0 },
            { temp: 40, speed: 0 },
            { temp: 41, speed: 0 },
            { temp: 42, speed: 0 },
            { temp: 43, speed: 0 },
            { temp: 44, speed: 0 },
            { temp: 45, speed: 0 },
            { temp: 46, speed: 0 },
            { temp: 47, speed: 0 },
            { temp: 48, speed: 0 },
            { temp: 49, speed: 0 },
            { temp: 50, speed: 39 },
            { temp: 51, speed: 39 },
            { temp: 52, speed: 39 },
            { temp: 53, speed: 39 },
            { temp: 54, speed: 39 },
            { temp: 55, speed: 39 },
            { temp: 56, speed: 39 },
            { temp: 57, speed: 39 },
            { temp: 58, speed: 39 },
            { temp: 59, speed: 39 },
            { temp: 60, speed: 39 },
            { temp: 61, speed: 39 },
            { temp: 62, speed: 39 },
            { temp: 63, speed: 39 },
            { temp: 64, speed: 45 },
            { temp: 65, speed: 45 },
            { temp: 66, speed: 45 },
            { temp: 67, speed: 45 },
            { temp: 68, speed: 55 },
            { temp: 69, speed: 55 },
            { temp: 70, speed: 55 },
            { temp: 71, speed: 55 },
            { temp: 72, speed: 55 },
            { temp: 73, speed: 55 },
            { temp: 74, speed: 55 },
            { temp: 75, speed: 70 },
            { temp: 76, speed: 70 },
            { temp: 77, speed: 70 },
            { temp: 78, speed: 70 },
            { temp: 79, speed: 70 },
            { temp: 80, speed: 70 },
            { temp: 81, speed: 70 },
            { temp: 82, speed: 70 },
            { temp: 83, speed: 70 },
            { temp: 84, speed: 80 },
            { temp: 85, speed: 80 },
            { temp: 86, speed: 80 },
            { temp: 87, speed: 80 },
            { temp: 88, speed: 90 },
            { temp: 89, speed: 90 },
            { temp: 90, speed: 90 },
            { temp: 91, speed: 90 },
            { temp: 92, speed: 95 },
            { temp: 93, speed: 95 },
            { temp: 94, speed: 95 },
            { temp: 95, speed: 100 },
            { temp: 96, speed: 100 },
            { temp: 97, speed: 100 },
            { temp: 98, speed: 100 },
            { temp: 99, speed: 100 },
            { temp: 100, speed: 100 }
        ],
        tableGPU: [
            { temp: 0, speed: 0 },
            { temp: 1, speed: 0 },
            { temp: 2, speed: 0 },
            { temp: 3, speed: 0 },
            { temp: 4, speed: 0 },
            { temp: 5, speed: 0 },
            { temp: 6, speed: 0 },
            { temp: 7, speed: 0 },
            { temp: 8, speed: 0 },
            { temp: 9, speed: 0 },
            { temp: 10, speed: 0 },
            { temp: 11, speed: 0 },
            { temp: 12, speed: 0 },
            { temp: 13, speed: 0 },
            { temp: 14, speed: 0 },
            { temp: 15, speed: 0 },
            { temp: 16, speed: 0 },
            { temp: 17, speed: 0 },
            { temp: 18, speed: 0 },
            { temp: 19, speed: 0 },
            { temp: 20, speed: 0 },
            { temp: 21, speed: 0 },
            { temp: 22, speed: 0 },
            { temp: 23, speed: 0 },
            { temp: 24, speed: 0 },
            { temp: 25, speed: 0 },
            { temp: 26, speed: 0 },
            { temp: 27, speed: 0 },
            { temp: 28, speed: 0 },
            { temp: 29, speed: 0 },
            { temp: 30, speed: 0 },
            { temp: 31, speed: 0 },
            { temp: 32, speed: 0 },
            { temp: 33, speed: 0 },
            { temp: 34, speed: 0 },
            { temp: 35, speed: 0 },
            { temp: 36, speed: 0 },
            { temp: 37, speed: 0 },
            { temp: 38, speed: 0 },
            { temp: 39, speed: 0 },
            { temp: 40, speed: 0 },
            { temp: 41, speed: 0 },
            { temp: 42, speed: 0 },
            { temp: 43, speed: 0 },
            { temp: 44, speed: 0 },
            { temp: 45, speed: 0 },
            { temp: 46, speed: 20 },
            { temp: 47, speed: 20 },
            { temp: 48, speed: 20 },
            { temp: 49, speed: 20 },
            { temp: 50, speed: 20 },
            { temp: 51, speed: 20 },
            { temp: 52, speed: 23 },
            { temp: 53, speed: 23 },
            { temp: 54, speed: 26 },
            { temp: 55, speed: 26 },
            { temp: 56, speed: 26 },
            { temp: 57, speed: 30 },
            { temp: 58, speed: 30 },
            { temp: 59, speed: 30 },
            { temp: 60, speed: 33 },
            { temp: 61, speed: 33 },
            { temp: 62, speed: 33 },
            { temp: 63, speed: 39 },
            { temp: 64, speed: 39 },
            { temp: 65, speed: 38 },
            { temp: 66, speed: 40 },
            { temp: 67, speed: 42 },
            { temp: 68, speed: 45 },
            { temp: 69, speed: 47 },
            { temp: 70, speed: 50 },
            { temp: 71, speed: 50 },
            { temp: 72, speed: 52 },
            { temp: 73, speed: 53 },
            { temp: 74, speed: 53 },
            { temp: 75, speed: 57 },
            { temp: 76, speed: 57 },
            { temp: 77, speed: 60 },
            { temp: 78, speed: 60 },
            { temp: 79, speed: 63 },
            { temp: 80, speed: 65 },
            { temp: 81, speed: 65 },
            { temp: 82, speed: 70 },
            { temp: 83, speed: 70 },
            { temp: 84, speed: 75 },
            { temp: 85, speed: 75 },
            { temp: 86, speed: 80 },
            { temp: 87, speed: 80 },
            { temp: 88, speed: 85 },
            { temp: 89, speed: 90 },
            { temp: 90, speed: 90 },
            { temp: 91, speed: 100 },
            { temp: 92, speed: 100 },
            { temp: 93, speed: 100 },
            { temp: 94, speed: 100 },
            { temp: 95, speed: 100 },
            { temp: 96, speed: 100 },
            { temp: 97, speed: 100 },
            { temp: 98, speed: 100 },
            { temp: 99, speed: 100 },
            { temp: 100, speed: 100 }
        ]
    },
    {
        name: 'Cool',
        tableCPU: [
            { temp: 0, speed: 0 },
            { temp: 1, speed: 0 },
            { temp: 2, speed: 0 },
            { temp: 3, speed: 0 },
            { temp: 4, speed: 0 },
            { temp: 5, speed: 0 },
            { temp: 6, speed: 0 },
            { temp: 7, speed: 0 },
            { temp: 8, speed: 0 },
            { temp: 9, speed: 0 },
            { temp: 10, speed: 0 },
            { temp: 11, speed: 0 },
            { temp: 12, speed: 0 },
            { temp: 13, speed: 0 },
            { temp: 14, speed: 0 },
            { temp: 15, speed: 0 },
            { temp: 16, speed: 0 },
            { temp: 17, speed: 0 },
            { temp: 18, speed: 0 },
            { temp: 19, speed: 0 },
            { temp: 20, speed: 0 },
            { temp: 21, speed: 0 },
            { temp: 22, speed: 0 },
            { temp: 23, speed: 0 },
            { temp: 24, speed: 0 },
            { temp: 25, speed: 0 },
            { temp: 26, speed: 0 },
            { temp: 27, speed: 0 },
            { temp: 28, speed: 0 },
            { temp: 29, speed: 0 },
            { temp: 30, speed: 0 },
            { temp: 31, speed: 0 },
            { temp: 32, speed: 0 },
            { temp: 33, speed: 0 },
            { temp: 34, speed: 0 },
            { temp: 35, speed: 0 },
            { temp: 36, speed: 0 },
            { temp: 37, speed: 0 },
            { temp: 38, speed: 0 },
            { temp: 39, speed: 0 },
            { temp: 40, speed: 0 },
            { temp: 41, speed: 0 },
            { temp: 42, speed: 0 },
            { temp: 43, speed: 0 },
            { temp: 44, speed: 0 },
            { temp: 45, speed: 39 },
            { temp: 46, speed: 39 },
            { temp: 47, speed: 39 },
            { temp: 48, speed: 39 },
            { temp: 49, speed: 39 },
            { temp: 50, speed: 39 },
            { temp: 51, speed: 39 },
            { temp: 52, speed: 39 },
            { temp: 53, speed: 39 },
            { temp: 54, speed: 39 },
            { temp: 55, speed: 39 },
            { temp: 56, speed: 39 },
            { temp: 57, speed: 39 },
            { temp: 58, speed: 45 },
            { temp: 59, speed: 45 },
            { temp: 60, speed: 45 },
            { temp: 61, speed: 45 },
            { temp: 62, speed: 55 },
            { temp: 63, speed: 55 },
            { temp: 64, speed: 55 },
            { temp: 65, speed: 55 },
            { temp: 66, speed: 55 },
            { temp: 67, speed: 55 },
            { temp: 68, speed: 55 },
            { temp: 69, speed: 55 },
            { temp: 70, speed: 55 },
            { temp: 71, speed: 55 },
            { temp: 72, speed: 55 },
            { temp: 73, speed: 55 },
            { temp: 74, speed: 55 },
            { temp: 75, speed: 70 },
            { temp: 76, speed: 70 },
            { temp: 77, speed: 70 },
            { temp: 78, speed: 70 },
            { temp: 79, speed: 70 },
            { temp: 80, speed: 80 },
            { temp: 81, speed: 80 },
            { temp: 82, speed: 80 },
            { temp: 83, speed: 80 },
            { temp: 84, speed: 80 },
            { temp: 85, speed: 90 },
            { temp: 86, speed: 90 },
            { temp: 87, speed: 90 },
            { temp: 88, speed: 90 },
            { temp: 89, speed: 90 },
            { temp: 90, speed: 100 },
            { temp: 91, speed: 100 },
            { temp: 92, speed: 100 },
            { temp: 93, speed: 100 },
            { temp: 94, speed: 100 },
            { temp: 95, speed: 100 },
            { temp: 96, speed: 100 },
            { temp: 97, speed: 100 },
            { temp: 98, speed: 100 },
            { temp: 99, speed: 100 },
            { temp: 100, speed: 100 }
        ],
        tableGPU: [
            { temp: 0, speed: 0 },
            { temp: 1, speed: 0 },
            { temp: 2, speed: 0 },
            { temp: 3, speed: 0 },
            { temp: 4, speed: 0 },
            { temp: 5, speed: 0 },
            { temp: 6, speed: 0 },
            { temp: 7, speed: 0 },
            { temp: 8, speed: 0 },
            { temp: 9, speed: 0 },
            { temp: 10, speed: 0 },
            { temp: 11, speed: 0 },
            { temp: 12, speed: 0 },
            { temp: 13, speed: 0 },
            { temp: 14, speed: 0 },
            { temp: 15, speed: 0 },
            { temp: 16, speed: 0 },
            { temp: 17, speed: 0 },
            { temp: 18, speed: 0 },
            { temp: 19, speed: 0 },
            { temp: 20, speed: 0 },
            { temp: 21, speed: 0 },
            { temp: 22, speed: 0 },
            { temp: 23, speed: 0 },
            { temp: 24, speed: 0 },
            { temp: 25, speed: 0 },
            { temp: 26, speed: 0 },
            { temp: 27, speed: 0 },
            { temp: 28, speed: 0 },
            { temp: 29, speed: 0 },
            { temp: 30, speed: 0 },
            { temp: 31, speed: 0 },
            { temp: 32, speed: 0 },
            { temp: 33, speed: 0 },
            { temp: 34, speed: 0 },
            { temp: 35, speed: 0 },
            { temp: 36, speed: 0 },
            { temp: 37, speed: 0 },
            { temp: 38, speed: 0 },
            { temp: 39, speed: 0 },
            { temp: 40, speed: 29 },
            { temp: 41, speed: 29 },
            { temp: 42, speed: 29 },
            { temp: 43, speed: 29 },
            { temp: 44, speed: 29 },
            { temp: 45, speed: 29 },
            { temp: 46, speed: 29 },
            { temp: 47, speed: 29 },
            { temp: 48, speed: 29 },
            { temp: 49, speed: 29 },
            { temp: 50, speed: 39 },
            { temp: 51, speed: 39 },
            { temp: 52, speed: 39 },
            { temp: 53, speed: 39 },
            { temp: 54, speed: 39 },
            { temp: 55, speed: 40 },
            { temp: 56, speed: 40 },
            { temp: 57, speed: 40 },
            { temp: 58, speed: 40 },
            { temp: 59, speed: 40 },
            { temp: 60, speed: 45 },
            { temp: 61, speed: 45 },
            { temp: 62, speed: 45 },
            { temp: 63, speed: 45 },
            { temp: 64, speed: 45 },
            { temp: 65, speed: 50 },
            { temp: 66, speed: 50 },
            { temp: 67, speed: 50 },
            { temp: 68, speed: 50 },
            { temp: 69, speed: 50 },
            { temp: 70, speed: 60 },
            { temp: 71, speed: 60 },
            { temp: 72, speed: 60 },
            { temp: 73, speed: 60 },
            { temp: 74, speed: 60 },
            { temp: 75, speed: 70 },
            { temp: 76, speed: 70 },
            { temp: 77, speed: 70 },
            { temp: 78, speed: 70 },
            { temp: 79, speed: 70 },
            { temp: 80, speed: 75 },
            { temp: 81, speed: 75 },
            { temp: 82, speed: 75 },
            { temp: 83, speed: 75 },
            { temp: 84, speed: 75 },
            { temp: 85, speed: 85 },
            { temp: 86, speed: 85 },
            { temp: 87, speed: 90 },
            { temp: 88, speed: 90 },
            { temp: 89, speed: 95 },
            { temp: 90, speed: 95 },
            { temp: 91, speed: 100 },
            { temp: 92, speed: 100 },
            { temp: 93, speed: 100 },
            { temp: 94, speed: 100 },
            { temp: 95, speed: 100 },
            { temp: 96, speed: 100 },
            { temp: 97, speed: 100 },
            { temp: 98, speed: 100 },
            { temp: 99, speed: 100 },
            { temp: 100, speed: 100 }
        ]
    },
    {
        name: 'Freezy',
        tableCPU: [
            { temp: 0, speed: 0 },
            { temp: 1, speed: 0 },
            { temp: 2, speed: 0 },
            { temp: 3, speed: 0 },
            { temp: 4, speed: 0 },
            { temp: 5, speed: 0 },
            { temp: 6, speed: 0 },
            { temp: 7, speed: 0 },
            { temp: 8, speed: 0 },
            { temp: 9, speed: 0 },
            { temp: 10, speed: 0 },
            { temp: 11, speed: 0 },
            { temp: 12, speed: 0 },
            { temp: 13, speed: 0 },
            { temp: 14, speed: 0 },
            { temp: 15, speed: 0 },
            { temp: 16, speed: 0 },
            { temp: 17, speed: 0 },
            { temp: 18, speed: 0 },
            { temp: 19, speed: 0 },
            { temp: 20, speed: 0 },
            { temp: 21, speed: 0 },
            { temp: 22, speed: 0 },
            { temp: 23, speed: 0 },
            { temp: 24, speed: 0 },
            { temp: 25, speed: 0 },
            { temp: 26, speed: 0 },
            { temp: 27, speed: 0 },
            { temp: 28, speed: 0 },
            { temp: 29, speed: 0 },
            { temp: 30, speed: 0 },
            { temp: 31, speed: 0 },
            { temp: 32, speed: 0 },
            { temp: 33, speed: 0 },
            { temp: 34, speed: 0 },
            { temp: 35, speed: 39 },
            { temp: 36, speed: 39 },
            { temp: 37, speed: 39 },
            { temp: 38, speed: 39 },
            { temp: 39, speed: 39 },
            { temp: 40, speed: 39 },
            { temp: 41, speed: 39 },
            { temp: 42, speed: 39 },
            { temp: 43, speed: 39 },
            { temp: 44, speed: 39 },
            { temp: 45, speed: 39 },
            { temp: 46, speed: 39 },
            { temp: 47, speed: 39 },
            { temp: 48, speed: 39 },
            { temp: 49, speed: 39 },
            { temp: 50, speed: 55 },
            { temp: 51, speed: 55 },
            { temp: 52, speed: 55 },
            { temp: 53, speed: 55 },
            { temp: 54, speed: 55 },
            { temp: 55, speed: 55 },
            { temp: 56, speed: 55 },
            { temp: 57, speed: 55 },
            { temp: 58, speed: 55 },
            { temp: 59, speed: 55 },
            { temp: 60, speed: 55 },
            { temp: 61, speed: 55 },
            { temp: 62, speed: 55 },
            { temp: 63, speed: 55 },
            { temp: 64, speed: 55 },
            { temp: 65, speed: 55 },
            { temp: 66, speed: 55 },
            { temp: 67, speed: 55 },
            { temp: 68, speed: 70 },
            { temp: 69, speed: 70 },
            { temp: 70, speed: 70 },
            { temp: 71, speed: 70 },
            { temp: 72, speed: 70 },
            { temp: 73, speed: 70 },
            { temp: 74, speed: 70 },
            { temp: 75, speed: 70 },
            { temp: 76, speed: 70 },
            { temp: 77, speed: 70 },
            { temp: 78, speed: 70 },
            { temp: 79, speed: 70 },
            { temp: 80, speed: 80 },
            { temp: 81, speed: 80 },
            { temp: 82, speed: 80 },
            { temp: 83, speed: 90 },
            { temp: 84, speed: 90 },
            { temp: 85, speed: 90 },
            { temp: 86, speed: 90 },
            { temp: 87, speed: 90 },
            { temp: 88, speed: 90 },
            { temp: 89, speed: 90 },
            { temp: 90, speed: 90 },
            { temp: 91, speed: 90 },
            { temp: 92, speed: 100 },
            { temp: 93, speed: 100 },
            { temp: 94, speed: 100 },
            { temp: 95, speed: 100 },
            { temp: 96, speed: 100 },
            { temp: 97, speed: 100 },
            { temp: 98, speed: 100 },
            { temp: 99, speed: 100 },
            { temp: 100, speed: 100 }
        ],
        tableGPU: [
            { temp: 0, speed: 0 },
            { temp: 1, speed: 0 },
            { temp: 2, speed: 0 },
            { temp: 3, speed: 0 },
            { temp: 4, speed: 0 },
            { temp: 5, speed: 0 },
            { temp: 6, speed: 0 },
            { temp: 7, speed: 0 },
            { temp: 8, speed: 0 },
            { temp: 9, speed: 0 },
            { temp: 10, speed: 0 },
            { temp: 11, speed: 0 },
            { temp: 12, speed: 0 },
            { temp: 13, speed: 0 },
            { temp: 14, speed: 0 },
            { temp: 15, speed: 0 },
            { temp: 16, speed: 0 },
            { temp: 17, speed: 0 },
            { temp: 18, speed: 0 },
            { temp: 19, speed: 0 },
            { temp: 20, speed: 0 },
            { temp: 21, speed: 0 },
            { temp: 22, speed: 0 },
            { temp: 23, speed: 0 },
            { temp: 24, speed: 0 },
            { temp: 25, speed: 0 },
            { temp: 26, speed: 0 },
            { temp: 27, speed: 0 },
            { temp: 28, speed: 0 },
            { temp: 29, speed: 0 },
            { temp: 30, speed: 29 },
            { temp: 31, speed: 29 },
            { temp: 32, speed: 29 },
            { temp: 33, speed: 29 },
            { temp: 34, speed: 29 },
            { temp: 35, speed: 29 },
            { temp: 36, speed: 29 },
            { temp: 37, speed: 29 },
            { temp: 38, speed: 29 },
            { temp: 39, speed: 29 },
            { temp: 40, speed: 29 },
            { temp: 41, speed: 39 },
            { temp: 42, speed: 39 },
            { temp: 43, speed: 39 },
            { temp: 44, speed: 39 },
            { temp: 45, speed: 39 },
            { temp: 46, speed: 45 },
            { temp: 47, speed: 45 },
            { temp: 48, speed: 45 },
            { temp: 49, speed: 45 },
            { temp: 50, speed: 45 },
            { temp: 51, speed: 45 },
            { temp: 52, speed: 45 },
            { temp: 53, speed: 45 },
            { temp: 54, speed: 45 },
            { temp: 55, speed: 45 },
            { temp: 56, speed: 50 },
            { temp: 57, speed: 50 },
            { temp: 58, speed: 50 },
            { temp: 59, speed: 50 },
            { temp: 60, speed: 50 },
            { temp: 61, speed: 60 },
            { temp: 62, speed: 60 },
            { temp: 63, speed: 60 },
            { temp: 64, speed: 60 },
            { temp: 65, speed: 60 },
            { temp: 66, speed: 65 },
            { temp: 67, speed: 65 },
            { temp: 68, speed: 65 },
            { temp: 69, speed: 65 },
            { temp: 70, speed: 65 },
            { temp: 71, speed: 70 },
            { temp: 72, speed: 70 },
            { temp: 73, speed: 70 },
            { temp: 74, speed: 70 },
            { temp: 75, speed: 70 },
            { temp: 76, speed: 75 },
            { temp: 77, speed: 75 },
            { temp: 78, speed: 75 },
            { temp: 79, speed: 75 },
            { temp: 80, speed: 75 },
            { temp: 81, speed: 85 },
            { temp: 82, speed: 85 },
            { temp: 83, speed: 85 },
            { temp: 84, speed: 85 },
            { temp: 85, speed: 85 },
            { temp: 86, speed: 95 },
            { temp: 87, speed: 95 },
            { temp: 88, speed: 95 },
            { temp: 89, speed: 95 },
            { temp: 90, speed: 95 },
            { temp: 91, speed: 100 },
            { temp: 92, speed: 100 },
            { temp: 93, speed: 100 },
            { temp: 94, speed: 100 },
            { temp: 95, speed: 100 },
            { temp: 96, speed: 100 },
            { temp: 97, speed: 100 },
            { temp: 98, speed: 100 },
            { temp: 99, speed: 100 },
            { temp: 100, speed: 100 }
        ]
    }
];
