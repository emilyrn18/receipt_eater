import cv2
#from cv2 import *

#Initialize web camera
camera = cv2.VideoCapture(0)

cv2.namedWindow("Receipt Eater Cam")

image_count = 0

#inside loop get the image frames

while True:
    ret, frame = camera.read()
    if not ret:
        print("failed to get frame")
        break
    #show the webcam to the user
    cv2.imshow("Receipt Eater Cam",frame)

    k = cv2.waitKey(1)

    #if esc key was hit
    if k%256 == 27:
        print("Escape hit, closing the app")
        break
    elif k%256 == 32:  #If space is name and store the image captured
        image_name = "receipt_image{}.jpg".format(image_count)
        cv2.imwrite(image_name, frame)
        print("Image captured")
        image_count += 1


camera.release()
cv2.destroyAllWindows()