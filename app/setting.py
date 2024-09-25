from pydantic.v1 import BaseSettings

class Settings(BaseSettings):
    userid: str = 'ubuntu'
    passwd: str = 'ubuntu'
    dbname: str = 'clouds2024'
    #dbname: str = 'ubuntu'
    dburl: str = 'localhost'
    #dbconn: str = f'sqlite:///app/{dbname}.db'
    dbconn: str = f'mysql+pymysql://{userid}:{passwd}@{dburl}:3306/{dbname}?charset=utf8mb4'

    # .env 파일을 읽도록 설정
    class Config:
        env_file = ".env"


config = Settings()
