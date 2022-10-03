module.exports = `
INSERT INTO clients (name, email, password, admin) VALUES ('Dan Marino', 'danmarino@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', false);
INSERT INTO clients (name, email, password, admin) VALUES ('Joe Montana', 'joemontana@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', true);

INSERT INTO barbershops (name, street, city, province, post_code, open_hours, cover_photo_url, lattitude, longitude) VALUES ('Ace Barbers', '351 Caledon Avenue', 'Hamilton', 'Ontario', 'L9C 3A5', '10:00AM-6:00PM', 'https://www.pexels.com/photo/men-having-their-haircut-1813272/', 43.22253103244279, -79.88574371583258);
INSERT INTO barbershops (name, street, city, province, post_code, open_hours, cover_photo_url, lattitude, longitude) VALUES ('LA Barbershop', '20 Rosedene Avenue', 'Hamilton', 'Ontario', 'L9A 1K4', '12:00PM-8:00PM', 'https://www.pexels.com/photo/salon-chair-beside-oil-heater-in-front-of-mirror-inside-room-1895701/', 43.243599148277106, -79.87500595990427);

INSERT INTO days (name) VALUES ('Monday');
INSERT INTO days (name) VALUES ('Tuesday');
INSERT INTO days (name) VALUES ('Wednesday');
INSERT INTO days (name) VALUES ('Thursday');
INSERT INTO days (name) VALUES ('Friday');
INSERT INTO days (name) VALUES ('Saturday');
INSERT INTO days (name) VALUES ('Sunday');

INSERT INTO appointments (start_time, date, client_id, barbershop_id, day_id) VALUES ('3:00PM', '2022-09-26', 1, 1, 1);
INSERT INTO appointments (start_time, date, client_id, barbershop_id, day_id) VALUES('4:00PM', '2022-09-27', 2, 2, 2);

INSERT INTO appointmentReviews (client_id, barbershop_id,  appointment_id, rating) VALUES (2,1,1,5);
INSERT INTO appointmentReviews (client_id, barbershop_id,  appointment_id, rating) VALUES (2,2,2,4);
`