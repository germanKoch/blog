package ru.venchok.controller;

import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import lombok.RequiredArgsConstructor;
import ru.venchok.domain.Category;
import ru.venchok.service.CategoryService;

import java.util.List;

@RequiredArgsConstructor
@Controller("api/category")
public class CategoryController {


    private final CategoryService service;

    @Get("/list")
    public HttpResponse<List<Category>> getAll() {
        return HttpResponse.ok(service.getList());
    }
}
