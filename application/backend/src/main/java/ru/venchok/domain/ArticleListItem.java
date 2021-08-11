package ru.venchok.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.OffsetDateTime;

@Data
@AllArgsConstructor
public class ArticleListItem {

    private Long id;
    private String title;
    private String category;
    private String body;
    private OffsetDateTime creationDate;
    private String cover;

}
