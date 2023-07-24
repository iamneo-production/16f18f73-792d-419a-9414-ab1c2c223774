package com.iamneo.security.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Advisors {
@Id
private int id;
private String pic;
private String name;
private String country;
public Advisors(int id, String name, String country,String pic) {
	super();
	this.id = id;
	this.name = name;
	this.country = country;
	this.pic=pic;
}
public Advisors() {
	super();
	// TODO Auto-generated constructor stub
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public String getPic() {
	return pic;
}
public void setName(String name) {
	this.name = name;
}
public String getCountry() {
	return country;
}
public void setCountry(String country) {
	this.country = country;
}
public void setPic(String pic) {
	this.pic = pic;
}

}
