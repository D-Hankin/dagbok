package com.dagbok.dagbok;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import jakarta.transaction.Transactional;

public interface DiaryRepository extends CrudRepository<Diary, Integer> {

    @Query("SELECT e FROM Diary e WHERE e.deleted = 0 ORDER BY e.datetime DESC")
    List<Diary> findBySoftDelete();

    @Transactional
    @Modifying
    @Query("UPDATE Diary e SET e.deleted = 1 WHERE e.id = ?1")
    int softDelete(int id);

    @Transactional
    @Modifying
    @Query("UPDATE Diary e SET e.deleted = 0 WHERE e.id = ?1")
    int undoLastDelete(int id);

    @Transactional
    @Modifying
    @Query("Update Diary e SET e.title = ?1, e.entry = ?2, e.dateForDisplay = ?3 WHERE e.id = ?4")
    void editEntryQuery(String title, String entry, LocalDate date_for_display, int id);
    
}
