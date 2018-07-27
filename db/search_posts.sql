select title, username, profile_pic from users
join posts
on author_id.posts = id.users
WHERE id = $1;