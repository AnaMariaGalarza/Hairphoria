package Grupo8.Hairphoria.service.Interfaces;

public interface ITokenBlacklistService {
    void add(String token);

    boolean contains(String token);
}
