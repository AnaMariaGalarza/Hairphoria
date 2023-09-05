package Grupo8.Hairphoria.service;

import Grupo8.Hairphoria.service.Interfaces.ITokenBlacklistService;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class TokenBlacklistService implements ITokenBlacklistService {

    private static final Map<String, String> tokenBlacklist = new ConcurrentHashMap<>();

    public void add(String token) {
        tokenBlacklist.put(token, token);
    }

    public boolean contains(String token) {
        return tokenBlacklist.containsKey(token);
    }


}
