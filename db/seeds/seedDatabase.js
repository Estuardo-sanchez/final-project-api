module.exports = `
INSERT INTO clients (name, email, password, admin) VALUES ('Dan Marino', 'danmarino@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', false);
INSERT INTO clients (name, email, password, admin) VALUES ('Joe Montana', 'joemontana@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', true);

INSERT INTO barbershops (name, street, city, province, post_code, open_hours, cover_photo_url, lattitude, longitude) VALUES ('Ace Barbers', '351 Caledon Avenue', 'Hamilton', 'Ontario', 'L9C 3A5', '10:00AM-6:00PM', 'https://www.pexels.com/photo/men-having-their-haircut-1813272/', 43.22253103244279, -79.88574371583258);
INSERT INTO barbershops (name, street, city, province, post_code, open_hours, cover_photo_url, lattitude, longitude) VALUES ('LA Barbershop', '20 Rosedene Avenue', 'Hamilton', 'Ontario', 'L9A 1K4', '12:00PM-8:00PM', 'https://www.pexels.com/photo/salon-chair-beside-oil-heater-in-front-of-mirror-inside-room-1895701/', 43.243599148277106, -79.87500595990427);
INSERT INTO barbershops (name, street, city, province, post_code, open_hours, cover_photo_url, lattitude, longitude) VALUES ('Vintage Argo Barbershop', '736 Upper James St', 'Hamilton', 'Ontario', 'L9C 3A2', '10:00AM-7:00PM', 'https://images.pexels.com/photos/4969856/pexels-photo-4969856.jpeg?auto=compress&cs=tinysrgb&w=1600', 43.230510, -79.881340);
INSERT INTO barbershops (name, street, city, province, post_code, open_hours, cover_photo_url, lattitude, longitude) VALUES ('Split Ave Barbershop', '836 Upper James St Unit 104', 'Hamilton', 'Ontario', 'L9C 3A4', '10:00AM-6:00PM', 'https://www.pexels.com/photo/men-having-their-haircut-1813272/', 43.217350, -79.886574);
INSERT INTO barbershops (name, street, city, province, post_code, open_hours, cover_photo_url, lattitude, longitude) VALUES ('Fade Master Barbershop', '582 Upper Wellington St', 'Hamilton', 'Ontario', 'L9A 3P9', '10:00AM-8:00PM', 'https://images.pexels.com/photos/7697394/pexels-photo-7697394.jpeg?auto=compress&cs=tinysrgb&w=1600', 43.238250, -79.867220);
INSERT INTO barbershops (name, street, city, province, post_code, open_hours, cover_photo_url, lattitude, longitude) VALUES ('Groom For Men', ' 316 King St E', 'Hamilton', 'Ontario', 'L8N 1C2', '10:00AM-6:00PM', 'https://images.pexels.com/photos/7195810/pexels-photo-7195810.jpeg?auto=compress&cs=tinysrgb&w=1600', 43.253610, -79.859980);
INSERT INTO barbershops (name, street, city, province, post_code, open_hours, cover_photo_url, lattitude, longitude) VALUES ('King Barbershop', '597 King St E', 'Hamilton', 'Ontario', 'L8N 1E4', '12:00AM-6:00PM', 'https://images.pexels.com/photos/4969838/pexels-photo-4969838.jpeg?auto=compress&cs=tinysrgb&w=1600', 43.252580, -79.850890);
INSERT INTO barbershops (name, street, city, province, post_code, open_hours, cover_photo_url, lattitude, longitude) VALUES ('Today Hair Culture', '355 Main St E', 'Hamilton', 'Ontario', 'L8N 1J4', '10:00AM-8:00PM', 'https://images.pexels.com/photos/2318055/pexels-photo-2318055.jpeg?auto=compress&cs=tinysrgb&w=1600', 43.253076, -79.869037);

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