# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
# file = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/andrei-rublev.jpg');
# # movie.photo.attach(io: file, filename" whatever) 
# movie.save
# :has_one_attached

Genre.create(name: "My List")
Genre.create(name: "Trending Now")
Genre.create(name: "New Releases")
andrei = Movie.create(title: "Andrei Rublev", description: "Andrei Rublev is set against the background of 15th-century Russia. Although the film is only loosely based on the life of Andrei Rublev, it seeks to depict a realistic portrait of medieval Russia. Tarkovsky sought to create a film that shows the artist as a world-historic figure and Christianity as an axiom of Russia’s historical identity.", year: 1969, maturity_rating: "R")
p 'hey'
andrei_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/andrei-rublev.jpg')
p 'end'

andrei_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/Andrei+Rublev+.mp4')
andrei.video.attach(io: andrei_v, filename: 'AndreiRublev.mp4')
andrei.photo.attach(io: andrei_p, filename: 'AndreiRublev.jpg')

# Movie.create(title: "Stalker", description: "The film depicts an expedition led by a figure known as the 'Stalker' to take his two clients—a melancholic writer seeking inspiration, and a professor seeking scientific discovery—to a mysterious restricted site known simply as the 'Zone', where there supposedly exists a room which grants a person's innermost desires. The trio travel through unnerving areas filled with the debris of modern society while engaging in many arguments.", year: 1979, maturity_rating: "PG13")

# Movie.create(title: "The Color of Pomegranates", description: "The Color of Pomegranates is a biography of the Armenian ashug Sayat-Nova (King of Song) that attempts to reveal the poet's life visually and poetically rather than literally. The film is presented with little dialogue using active tableaux which depict the poet's life in chapters: Childhood, Youth, Prince's Court (where he falls in love with a tsarina), The Monastery, The Dream, Old Age, The Angel of Death and Death.", year: 1969, maturity_rating: "PG13")

MovieList.create(movie_id: 1, genre_id: 2)
MovieList.create(movie_id: 1, genre_id: 3)
# MovieList.create(movie_id: 2, genre_id: 2)
# MovieList.create(movie_id: 2, genre_id: 3)
# MovieList.create(movie_id: 3, genre_id: 3)
# Actor.create(first_name: "Andrei", last_name: "Tarkovsky")
# Actor.create(first_name: "Sergei", last_name: "Parajanov")
# Actor.create(first_name: "Anatoly", last_name: "Solonitsyn")
# Actor.create(first_name: "Alexander", last_name: "Kaidanovsky")
# Actor.create(first_name: "Sofiko", last_name: " Chiaureli")
# Casting.create(movie_id: 1, actor_id: 1, ord: 0)
# Casting.create(movie_id: 2, actor_id: 1, ord: 0)
# Casting.create(movie_id: 3, actor_id: 2, ord: 0)
# Casting.create(movie_id: 1, actor_id: 3, ord: 1)
# Casting.create(movie_id: 2, actor_id: 4, ord: 1)
# Casting.create(movie_id: 3, actor_id: 5, ord: 1)

# Genre.create(name: "Comedies")

# Movie.create(title: "The Diamond Arm", description: "The Diamond Arm has become a Russian cult film and is considered by many Russian contemporaries to be one of the finest comedies of all time. It was also one of the all-time leaders at the Soviet box office with over 76,700,000 theatre admissions in the Soviet era. The plot of the film was based on a real-life news item about Swiss smugglers who tried to transport jewels in an orthopedic cast.", year: 1969, maturity_rating: "PG13")
# Movie.create(title: "Ivan Vasilievich: Back to the Future", description: "The story begins in 1973 Moscow, where engineer Alexander 'Shurik' Timofeev (Aleksandr Demyanenko) is working on a time machine in his apartment. By accident, he sends Ivan Vasilevich Bunsha (Yuri Yakovlev), superintendent of his apartment building, and George Miloslavsky (Leonid Kuravlev), a small-time burglar, back into the time of Ivan IV 'The Terrible'. The pair is forced to disguise themselves, with Bunsha dressing up as Ivan IV (tsar) and Miloslavsky as a knyaz (duke) of the same name. At the same time, the real Ivan IV (also played by Yuri Yakovlev) is sent by the same machine into Shurik's apartment, he has to deal with modern-day life while Shurik tries to fix the machine so that everyone can be brought back to their proper place in time.", year: 1973, maturity_rating: "PG13")
# Movie.create(title: "Operation Y and Shurik's Other Adventures", description: "Three stories about Shurik - a young student. He fights against criminals, falls in love, confuses apartments, passes exams - he lives after all.", year: 1965, maturity_rating: "PG13")
# Movie.create(title: "Moscow Does Not Believe in Tears", description: "This is a life story of three girlfriends from youth to autumn ages. Their dreams and wishes, love, disillusions. Different careers. And big late love.", year: 1980, maturity_rating: "PG13")
# Movie.create(title: "Office Romance", description: "Both romantic drama and screwball comedy, the film is noted for its scenes of Moscow in the late 1970s, and for its comical depiction of the everyday life and customs of Soviet society during the Era of Stagnation.", year: 1977, maturity_rating: "PG13")
# Movie.create(title: "Gentlemen of Fortune", description: "The movie follows the story of an amiable kindergarten director named Troshkin who looks exactly like a cruel criminal nicknamed Docent that has stolen Alexander the Great's helmet at an archaeological excavation. Docent and his gang are caught by police, but Docent is imprisoned in a different jail than his mates. Since Troshkin looks identical to Docent, the police send him undercover to prison with the real criminals to get information about the stolen helmet. He must pretend to be the real felon Docent, so in order to be convincing, Troshkin, a well-educated and good-natured man, has to learn slang and manners of criminals.", year: 1971, maturity_rating: "PG13")
# Movie.create(title: "The Irony of Fate", description: "The key subplot is the drab uniformity of Brezhnev-era public architecture. This setting is explained in a humorous animated prologue, in which architects are overruled by politicians and red tape. As a result, the entire country is polluted with identical, unimaginative multistory apartment buildings that can be found in every city, town, and suburb across the former Soviet Union. These buildings are completely uniform in every detail including the door key of each apartment. ", year: 1976, maturity_rating: "PG13")
# Movie.create(title: "Mimino", description: "Georgian bush pilot Valiko Mizandari a.k.a. Mimino works at small local airline, flying helicopters between small villages. But he dreams of piloting large international airliners, so he decides to go to Moscow to follow his dream. There in a hotel he meets Armenian truck driver Ruben Khachikyan who is given a place in that hotel by mistake instead of another Khachikyan (Professor), and they have many adventures in Moscow.", year: 1977, maturity_rating: "PG13")
# Movie.create(title: "Striped Trip", description: "To escape from a hot tropical place Shuleykin accepts a position on a ship looking after a cargo of twelve cages with tigers. Chief mate has continuous arguments with Marianna about the little tricks she plays on the crew. One day a stowaway monkey opens the cages and the limited capabilities of Shuleykin get exposed. In this situation Marianna unexpectedly turns into a skilled animal trainer.", year: 1961, maturity_rating: "PG13")
# Movie.create(title: "Beware of the Car", description: "The movie plot evolves around Yuriy Detochkin, a humble Soviet insurance agent suffering from a minor mental disorder. Detochkin applies great resourcefullness and exceptional driving skill to stealing cars from corrupt Soviet officials in a Robin Hood way, disappointed by the Militsiya (Soviet police) being unable to fight them efficiently. One of the Detochkin's un-innocent victims is Dima Semitsvetov, a retail embezzler hilariously trolled, but still tolerated by his colourful father-in-law Sokol-Kruzhkin, a retired Soviet Army officer. Detochkin sells the stolen cars and anonymously transfers the money to the accounts of various orphanages. Detective Maxim Podberyozovikov investigates his crimes and tries to prosecute him, but faces a serious moral problem in doing that, partly because the suspect appears to be his amateur theater mate and friend.", year: 1966, maturity_rating: "PG13")

# MovieList.create(movie_id: 4, genre_id: 4, sample: "true")
# MovieList.create(movie_id: 5, genre_id: 4, sample: "true")
# MovieList.create(movie_id: 6, genre_id: 4, sample: "true")
# MovieList.create(movie_id: 7, genre_id: 4, sample: "true")
# MovieList.create(movie_id: 8, genre_id: 4, sample: "true")
# MovieList.create(movie_id: 9, genre_id: 4, sample: "true")
# MovieList.create(movie_id: 10, genre_id: 4, sample: "true")
# MovieList.create(movie_id: 11, genre_id: 4, sample: "true")
# MovieList.create(movie_id: 12, genre_id: 4, sample: "true")
# MovieList.create(movie_id: 13, genre_id: 4, sample: "true")

# Genre.create(name: "Dramas")

# Movie.create(title: "Leviathan", description: "In a Russian coastal town, Kolya is forced to fight the corrupt mayor when he is told that his house will be demolished. He recruits a lawyer friend to help, but the man's arrival brings further misfortune for Kolya and his family.", year: 2014, maturity_rating: "PG13")

# Movie.create(title: "The Fool", description: "Dima Nikitin is an ordinary honest plumber who suddenly decides to face the corrupt system of local politics in order to save the lives of 800 inhabitants of an old dormitory, which is about to collapse.", year: 2014, maturity_rating: "PG13")

# Movie.create(title: "Silent Souls", description: "Present days. A man and his companion go on a journey to cremate the dead body of the former beloved wife, on a riverbank in the area where they spent their honeymoon.", year: 2010, maturity_rating: "R")

# Movie.create(title: "Brother 2", description: "Arriving in Moscow, Danila discovers Konstantin dead and he sets out to avenge his death; a journey that leads him to Chicago and a whole new experience.", year: 2000, maturity_rating: "R")

# Movie.create(title: "Elena", description: "When a sudden illness and an unexpected reunion threaten dutiful housewife Elena's potential inheritance, she must hatch a desperate plan ...", year: 2011, maturity_rating: "PG13")

# Movie.create(title: "The Return", description: "In the Russian wilderness, two brothers face a range of new, conflicting emotions when their father - a man they know only through a single photograph - resurfaces.", year: 2003, maturity_rating: "PG13")

# Movie.create(title: "How I Ended This Summer", description: "A polar station on a desolate island in the Arctic Ocean. Sergei, a seasoned meteorologist, and Pavel, a recent college graduate, are spending months in complete isolation on the once strategic research base. Pavel receives an important radio message and is still trying to find the right moment to tell Sergei, when fear, lies and suspicions start poisoning the atmosphere.", year: 2010, maturity_rating: "PG13")

# Movie.create(title: "Everybody Dies But Me", description: "One Monday morning Katya, Vika and Zhanna learn that there will be a school disco, their first disco, on the coming Saturday night. The girls feverishly start preparing for the event, which rapidly becomes the most important moment ever in their universe, and looks like the ideal way to escape their daily lives.", year: 2008, maturity_rating: "PG13")

# Movie.create(title: "The Banishment", description: "A trip to the pastoral countryside reveals a dark, sinister reality for a family from the city.", year: 2007, maturity_rating: "PG13")

# Movie.create(title: "The Tribe", description: "A deaf boy joins a boarding school for similar children. Confronted by the violent and criminal antics of some of the other boys and girls, he struggles to conform and join the 'tribe'.", year: 2014, maturity_rating: "R")

# MovieList.create(movie_id: 14, genre_id: 5, sample: "true")
# MovieList.create(movie_id: 15, genre_id: 5, sample: "true")
# MovieList.create(movie_id: 16, genre_id: 5, sample: "true")
# MovieList.create(movie_id: 17, genre_id: 5, sample: "true")
# MovieList.create(movie_id: 18, genre_id: 5, sample: "true")
# MovieList.create(movie_id: 19, genre_id: 5, sample: "true")
# MovieList.create(movie_id: 20, genre_id: 5, sample: "true")
# MovieList.create(movie_id: 21, genre_id: 5, sample: "true")
# MovieList.create(movie_id: 22, genre_id: 5, sample: "true")
# MovieList.create(movie_id: 23, genre_id: 5, sample: "true")

# MovieList.create(movie_id: 17, genre_id: 3, sample: "true")
# MovieList.create(movie_id: 18, genre_id: 3, sample: "true")
# MovieList.create(movie_id: 19, genre_id: 3, sample: "true")
# MovieList.create(movie_id: 20, genre_id: 3, sample: "true")

# MovieList.create(movie_id: 21, genre_id: 2, sample: "true")
# MovieList.create(movie_id: 22, genre_id: 2, sample: "true")
# MovieList.create(movie_id: 23, genre_id: 2, sample: "true")



# ph = open('https://s3-us-west-1.amazonaws.com/file-up-load-2-dev/Andrei+Rublev.jpg')
# v = open('https://s3-us-west-1.amazonaws.com/file-up-load-2-dev/Andrei+Rublev+.mp4')
# m.video.attach(io: v, filename: 'AndreiRublev.mp4')
# m.photo.attach(io: ph, filename: 'AndreiRublev.jpg')