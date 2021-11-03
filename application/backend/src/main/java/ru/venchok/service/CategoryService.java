package ru.venchok.service;

import lombok.RequiredArgsConstructor;
import ru.venchok.domain.Category;
import ru.venchok.repository.CategoryRepository;

import javax.inject.Singleton;
import java.util.List;

@Singleton
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository repository;

    public List<Category> getList() {
        return repository.getList();
    }

}
