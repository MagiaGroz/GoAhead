from django.db import models
from django.contrib.auth.models import User

class Course(models.Model):
    name=models.CharField(max_length=400, default='Golang')
    author=models.CharField(max_length=400, default='MIT')
    image_ref=models.CharField(max_length=400,default='../images/default.jpg')
    description=models.CharField(max_length=1500,default='Golang language course from MIT university')
    price = models.FloatField(default=1000)
    user = models.IntegerField(default=1)
    def to_json(self):
        return {
            'id':self.id,
            'name':self.name,
            'author':self.author,
            'image_ref':self.image_ref,
            'description':self.description,
            'price':self.price,
            'user':self.user
        }

class userProfile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE,related_name="profile")
    courses = models.ManyToManyField(Course)

    def __str__(self):
        return self.user.username
