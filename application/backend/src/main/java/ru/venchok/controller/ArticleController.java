package ru.venchok.controller;

import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.PathVariable;
import io.micronaut.http.annotation.QueryValue;
import lombok.RequiredArgsConstructor;
import ru.venchok.domain.ArticleDetails;
import ru.venchok.domain.ArticleListItem;
import ru.venchok.service.ArticleService;

import java.util.List;

@RequiredArgsConstructor
@Controller("api/article")
public class ArticleController {

    private final ArticleService service;

    @Get("/list")
    public HttpResponse<List<ArticleListItem>> getAll() {
        return HttpResponse.ok(service.getList());
    }

    @Get("/{id}")
    public HttpResponse<ArticleDetails> getById(@PathVariable Long id) {
        return HttpResponse.ok(service.getById(id));
    }

    @Get("/category")
    public HttpResponse<List<ArticleListItem>> getByCategory(@QueryValue String category) {
        return HttpResponse.ok(service.getByCategory(category));
    }

}
