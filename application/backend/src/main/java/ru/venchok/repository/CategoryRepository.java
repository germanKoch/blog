package ru.venchok.repository;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import ru.venchok.jooq.tables.pojos.Category;
import ru.venchok.repository.mapper.CategoryMapper;

import javax.inject.Singleton;
import java.util.List;
import java.util.stream.Collectors;

@Singleton
public class CategoryRepository {

    private final DSLContext context;
    private final CategoryMapper mapper;
    private static final ru.venchok.jooq.tables.Category CATEGORY = ru.venchok.jooq.tables.Category.CATEGORY;

    public CategoryRepository(Configuration config, CategoryMapper mapper) {
        this.context = config.dsl();
        this.mapper = mapper;
    }

    public List<ru.venchok.domain.Category> getList() {
        List<Category> categories = context.select().from(CATEGORY).fetch().into(Category.class);
        return categories.stream().map(mapper::map).collect(Collectors.toList());
    }

}
