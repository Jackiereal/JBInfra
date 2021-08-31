import logging
import sys
from logging.handlers import TimedRotatingFileHandler

FORMATTER = logging.Formatter('%(asctime)s - %(filename)s - %(levelname)s - %(message)s')
LOG_FILE = "logs/Real.log"

def get_condole_handler():
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setFormatter(FORMATTER)
    return console_handler

def get_file_handler(filename):
    file_handler = TimedRotatingFileHandler(filename, when='midnight', backupCount=15)
    file_handler.setFormatter(FORMATTER)
    return file_handler

def getLogger(processId=0, loggerName="app"):

    if loggerName == "app":
        logger = logging.getLogger(loggerName)
        if not getattr(logger, 'handler_set', None):
            logger.setLevel(logging.INFO)
            logger.addHandler(get_file_handler(LOG_FILE))
            logger.addHandler(get_condole_handler())
            logger.propagate = False
            logger.handler_set = True
        return logger
    if loggerName != "app" and loggerName == "process":
        processLog = logging.getLogger(loggerName)
        processLog.setLevel(logging.DEBUG)
        fileName = "logs/" + str(processId) + ".log"
        processLog.addHandler(get_file_handler(fileName))
        processLog.propagate = False
        processLog.handler_set = True
    return processLog
