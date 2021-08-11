package ru.venchok.repository.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import ru.venchok.domain.ArticleDetails;
import ru.venchok.domain.ArticleListItem;
import ru.venchok.jooq.tables.pojos.Article;

@Mapper(
        componentModel = "jsr330",

        unmappedTargetPolicy = ReportingPolicy.ERROR
)
public interface ArticleMapper {

    ArticleDetails mapToDetails(Article article);

    ArticleListItem mapToItem(Article article);

}
