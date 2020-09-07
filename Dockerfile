FROM zsf10838438/get_font_file:v1
RUN mkdir /workspace/get_font_file -p
COPY . /workspace/get_font_file
WORKDIR /workspace/get_font_file
#RUN source /etc/profile \
#&& npm install --unsafe-perm
#CMD /bin/bash /workspace/get_font_file/start.sh



