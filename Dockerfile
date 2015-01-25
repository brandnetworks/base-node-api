FROM hwestphal/nodebox

ADD api /api

WORKDIR /api

ONBUILD RUN npm rebuild

ENTRYPOINT ["npm"]

CMD ["start"]
