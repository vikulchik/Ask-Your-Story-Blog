import {NotFoundException} from "@nestjs/common";

export abstract class BaseService<T> {
    abstract getById(id: string | number): Promise<T>;

    async validateEntityExisting(id: string, entityName: string): Promise<T> {
        const existingEntity = await this.getById(id);

        if (!existingEntity) {
            throw new NotFoundException(`${entityName} not found`);
        }

        return existingEntity;
    }
}
