package com.dagbok.dagbok;

import org.springframework.beans.factory.annotation.Autowired;
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
        
        model.addAttribute("diaryEntries", diaryRepository.findAll());

        return "index";
    }

    @PostMapping("/new-entry")
    public String addNewEntry(@RequestParam("newEntry") String newEntry) {

        Diary diary = new Diary();
        diary.setEntry(newEntry);
        diaryRepository.save(diary);

        return "redirect:/";
    }

    @GetMapping("/delete-entry")
    public String deleteEntry(@RequestParam int id) {
        
        diaryRepository.deleteById(id);
        
        return "redirect:/";
    }
    
    

}
