package ru.venchok.repository;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import ru.venchok.domain.ArticleDetails;
import ru.venchok.domain.ArticleListItem;
import ru.venchok.jooq.tables.pojos.Article;
import ru.venchok.repository.mapper.ArticleMapper;

import javax.inject.Singleton;
import java.util.List;
import java.util.stream.Collectors;

@Singleton
public class ArticleRepository {

    private final DSLContext context;
    private final ArticleMapper mapper;
    private static final ru.venchok.jooq.tables.Article ARTICLE = ru.venchok.jooq.tables.Article.ARTICLE;

    public ArticleRepository(Configuration config, ArticleMapper mapper) {
        this.context = config.dsl();
        this.mapper = mapper;
    }

    public List<ArticleListItem> getList() {
        List<Article> articles = context.select().from(ARTICLE).fetch().into(Article.class);
        return articles.stream().map(mapper::mapToItem).collect(Collectors.toList());
    }

    public ArticleDetails getById(Long id) {
        Article article = context.select().from(ARTICLE).where(ARTICLE.ID.eq(id)).fetchOne().into(Article.class);
        return mapper.mapToDetails(article);
    }

    public List<ArticleListItem> getByCategory(Long category) {
        List<Article> articles = context.select().from(ARTICLE).where(ARTICLE.CATEGORY.eq(category)).fetch().into(Article.class);
        return articles.stream().map(mapper::mapToItem).collect(Collectors.toList());
    }

}
