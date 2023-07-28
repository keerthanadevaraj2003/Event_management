package com.ex.mod1.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ex.mod1.Entity.OrganizerForm;

public interface OrganizerFormRepo extends JpaRepository<OrganizerForm, Integer> {
	@Query(value="SELECT event_name from organizer_form",nativeQuery=true)
	public List<String> getEvent();
}
