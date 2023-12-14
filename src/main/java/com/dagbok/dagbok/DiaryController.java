package com.dagbok.dagbok;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class DiaryController {
    
    @Autowired
    private DiaryRepository diaryRepository;

    @GetMapping
    public String getIndex(Model model) {
        
        model.addAttribute("diaryEntries", diaryRepository.findBySoftDelete());
        System.out.println(diaryRepository.findBySoftDelete());

        return "index";
    }

    @PostMapping("/new-entry")
    public String addNewEntry(@RequestParam("newEntry") String newEntry) {

        Diary diary = new Diary();
        diary.setDatetime(LocalDateTime.now());
        diary.setEntry(newEntry);
        diaryRepository.save(diary);

        return "redirect:/";
    }

    @GetMapping("/delete-entry")
    public String deleteEntry(@RequestParam int id) {
        
        diaryRepository.softDelete(id);
        
        return "redirect:/";
    }
    
    

}
