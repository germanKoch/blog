package ru.venchok.service;

import lombok.RequiredArgsConstructor;
import ru.venchok.domain.ArticleDetails;
import ru.venchok.domain.ArticleListItem;
import ru.venchok.repository.ArticleRepository;

import javax.inject.Singleton;
import java.util.List;
import java.util.stream.Collectors;

@Singleton
@RequiredArgsConstructor
public class ArticleService {

    private final ArticleRepository repository;
    private static final int PREVIEW_SIZE = 300;

    public List<ArticleListItem> getList() {
        return repository.getList().stream().map(this::cutItemBody).collect(Collectors.toList());
    }

    public ArticleDetails getById(Long id) {
        return repository.getById(id);
    }

    public List<ArticleListItem> getByCategory(String category) {
        return repository.getByCategory(category).stream().map(this::cutItemBody).collect(Collectors.toList());
    }

    private ArticleListItem cutItemBody(ArticleListItem init) {
        String body = init.getBody();
        body = body.substring(0, PREVIEW_SIZE) + "...";
        init.setBody(body);
        return init;
    }
}
