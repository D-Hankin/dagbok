package com.dagbok.dagbok;

import java.time.LocalDate;
import java.time.LocalDateTime;

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

    int lastDeletedId = 0;
    int displayType = 0;
    LocalDate startDateX = LocalDate.now();
    LocalDate finishDateX = LocalDate.now();

    @GetMapping("/")
    public String getIndex(Model model) {
        
        System.out.println(displayType + " " + startDateX + " " + finishDateX);
        if (displayType == 0) {
            model.addAttribute("diaryEntries", diaryRepository.showByDate(LocalDate.now()));
        } else {
            System.out.println("getting here");
            model.addAttribute("diaryEntries", diaryRepository.searchByDate(startDateX, finishDateX));
        }

        return "index";
    }

    @PostMapping("/new-entry")
    public String addNewEntry(@RequestParam("newEntryTitle") String newEntryTitle, @RequestParam("newEntry") String newEntry, @RequestParam(name = "dateForDisplay", required = false) LocalDate dateForDisplay) {

        String newEntryTrimmed = newEntry.trim();
        String newEntryTitleTrimmed = newEntryTitle.trim();

        if (dateForDisplay == null) 
            dateForDisplay = LocalDate.now();

        if (newEntryTrimmed != "" && newEntryTitleTrimmed != "") {
            Diary diary = new Diary();
            diary.setDatetime(LocalDateTime.now());
            diary.setTitle(newEntryTitle);
            diary.setEntry(newEntry);
            diary.setDateForDisplay(dateForDisplay);
            diaryRepository.save(diary);
        }
        return "redirect:/";
    }

    @GetMapping("/delete-entry")
    public String deleteEntry(@RequestParam int id) {
        
        lastDeletedId = id;
        diaryRepository.softDelete(id);
        
        return "redirect:/";
    }

    @GetMapping("/undo-last-delete")
    public String undoLastDeleteString() {

        if (lastDeletedId != 0) {
            System.out.println(lastDeletedId);
            diaryRepository.undoLastDelete(lastDeletedId);
        }

        return "redirect:/";
    }
    
    @PostMapping("/edit-entry")
    public String editEntry(@RequestParam int id, @RequestParam("editTitleInput") String editTitleInput, @RequestParam("editBoxInput") String editBoxInput, @RequestParam(name = "editBoxDate", required = false) LocalDate editBoxDate) {
        System.out.println(id + " " + editTitleInput + " " + editBoxInput + " " + editBoxDate);

        String editTitleInputTrimmed = editTitleInput.trim();
        String editBoxInputTrimmed = editBoxInput.trim();
        
        if (editBoxDate == null) 
            editBoxDate = LocalDate.now();

        if (editTitleInputTrimmed != "" && editBoxInputTrimmed != "") {

            diaryRepository.editEntryQuery(editTitleInput, editBoxInput, editBoxDate, id);
        
        }

        return "redirect:/";
    }
    
    @PostMapping("/search-by-date")
    public String byDate(@RequestParam("chooseStartDate") LocalDate startDate, @RequestParam("chooseFinishDate") LocalDate finishDate) {

        if (startDate != null || finishDate != null) {
            displayType = 1;
            startDateX = startDate;
            finishDateX = finishDate;
        }
        return "redirect:/";
    }
    
    
    

}
