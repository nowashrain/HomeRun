from pydantic.v1 import BaseSettings

class Settings(BaseSettings):
    userid: str = 'ubuntu'
    passwd: str = 'ubuntu'
    dbname: str = 'clouds2024'
    #dbname: str = 'ubuntu'
    dburl: str = 'localhost'
    #dbconn: str = f'sqlite:///app/{dbname}.db'
     .env 파일을 읽도록 설정
    class Config:
        env_file = ".env"

    @property
    def dbconn(self):
        return f'mysql+pymysql://{self.userid}:{self.passwd}@{self.dburl}:3306/{self.dbname}?charset=utf8mb4'
    

config = Settings()
