package ru.venchok.repository.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import ru.venchok.jooq.tables.pojos.Category;

@Mapper(
        componentModel = "jsr330",

        unmappedTargetPolicy = ReportingPolicy.ERROR
)
public interface CategoryMapper {

    ru.venchok.domain.Category map(Category category);

}
