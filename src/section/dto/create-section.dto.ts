export class CreateSectionDto {
    // Course_id is a foreign key
    course_id: string
    sec_id: string
    semester: string
    year: number
    // Bottom two are foreign keys. Should they be there?
    building: string
    room_number: number
    time_slot_id: string
}
